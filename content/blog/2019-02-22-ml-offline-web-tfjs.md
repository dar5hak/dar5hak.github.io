+++
date = 2019-02-22
title = "Implementing Machine Learning for the Offline Web with TensorFlow.js"

[taxonomies]
tags = ["web", "offline", "tensorflow", "ml"]
+++

![](https://thedubiousdisc.files.wordpress.com/2019/02/tfjs-offline-1.png?w=640)

Offline Web apps are finally a thing. The cleverest of ideas which were previously only imagination, are now reality.

Thanks to the various storage mechanisms provided by modern browsers, it is now possible to save machine learning models directly on the client side. You can then use these to produce outputs without requiring a connection with the server.

This post demonstrates how to do that.

<!-- more -->

## Introduction

[TensorFlow.js](https://js.tensorflow.org/) is an open source machine learning library backed by Google. It lets you develop and train neural networks in a style similar to its Python counterparts, [Keras](https://keras.io) and [TensorFlow](https://www.tensorflow.org) (the Python one).

In this post, we will use the ability of TensorFlow.js to save a model into browser storage and use it to make predictions offline.

We won't be developing a model from scratch, since that is out of the scope of this post. You can always look up the excellent [tutorials](https://js.tensorflow.org/tutorials/) on the TensorFlow.js site for that.

For our small project, we will pick an already developed model for the classic deep learning problem of recognizing handwritten digits.

## Prerequisites

To be able to follow this guide, you will need some rudimentary knowledge of:

- Node.js
- General concepts surrounding neural networks, like training and one-hot encoding

Further, you will need the following software installed on your machine:

- Node.js (v8.15.0 or later)
- Git (optional)
- Any modern browser

Ready? Let's get started.

## Step 1: Train a Model

A good [implementation](https://github.com/tensorflow/tfjs-examples/tree/master/mnist-node) of the digit recognition neural network is provided by the Tensorflow.js community. It uses the famous MNIST data set for training. We are going to get the source code and train this model ourselves. If you prefer not to do so, you can skip to Step 1a.

Go to the [tensorflow/tfjs-examples](https://github.com/tensorflow/tfjs-examples) repository on GitHub and clone or download it to your machine.

Navigate into the `tfjs-examples/mnist-node` directory. Install the dependencies using this command:

```sh
npm install
```

Next, run the following command to train the model and save its files:

```sh
node main.js --model_save_path=./models
```

These will take a few (or several) minutes to run, depending on your hardware. Once it is finished, you will see a new `models` directory under `mnist-node`. It will have two files:

- `model.json` is the compiled structure of the neural network. It contains information about the size, shape and configuration of each layer, among other things.
- `weights.bin`, as the name suggests, contains the weights assigned to each node after training the network.

### Step 1a: Download Pre-trained Model (Optional)

If you don't want to train the model yourself, you can download the pre-trained files from my repository:

- [model.json](https://raw.githubusercontent.com/dar5hak/offline-mnist/master/static/models/model.json)
- [weights.bin](https://github.com/dar5hak/offline-mnist/blob/master/static/models/weights.bin?raw=true)

## Step 2: Web Application Setup

Create a separate directory somewhere else for your Web app source code. Let's call it `offline-mnist`.

To tell the universe that we'll be using npm dependencies, run this command inside your `offline-mnist` directory:

```sh
npm init -y
```

This will generate a `package.json` file.

Since we want to use TensorFlow.js in our code, let's declare it as a dependency:

```sh
npm install @tensorflow/tfjs
```

This is also where you might want to install any development dependencies you require for the project. I used TypeScript with Parcel bundler, so I had to do something like:

```sh
npm install --save-dev typescript parcel-bundler parcel-plugin-static-files-copy
```

## Step 3: Copy the Model

Copy the `models` directory you created in Step 1, and paste it into your project directory, inside a new `static` subdirectory (or wherever your bundler looks for static assets).

This will ensure that your trained model files are available for the browser to download.

## Step 4: Load the Model using HTTP

Awesome! Now that the boilerplate is done, it is time to put some sizzling code onto it.

Create an `index.js` file (or `index.ts` if you chose TypeScript).

First things first:

```js
import { loadLayersModel } from "@tensorflow/tfjs";
```

The `loadLayersModel` function lets you fetch your TensorFlow.js model from a variety of sources — HTTP in our case. It returns a `Promise` of the model object.

We need to provide a URL to `loadLayersModel` to tell it where to get the files from. If it starts with `http://` or `https://`, it will know that it needs to make an HTTP call.

Since we are serving everything from the same origin, we will use `window.location.href` to determine the current origin, which might be something like `http://127.0.0.1:1234/`.

```js
const MODEL_HTTP_URL = "models/model.json";

async function fetchModel() {
  try {
    const model = await loadLayersModel(window.location.href + MODEL_HTTP_URL);
    console.log("Model loaded from HTTP.");
    console.log(model);
    return model;
  } catch (error) {
    console.error(error);
  }
}
```

The `model` object is now available for use.

## Step 5: Save the Model to IndexedDB

Now that you have the model object available, the first thing to do is to save it to browser storage. The storage mechanism we will use is called IndexedDB.

```js
const MODEL_HTTP_URL = "models/model.json";
const MODEL_INDEXEDDB_URL = "indexeddb://mnist-model";

async function fetchModel() {
  try {
    const model = await loadLayersModel(window.location.href + MODEL_HTTP_URL);
    console.log("Model loaded from HTTP.");

    // Store the downloaded model locally for future use
    await model.save(MODEL_INDEXEDDB_URL);
    console.log("Model saved to IndexedDB.");

    return model;
  } catch (error) {
    console.error(error);
  }
}
```

If you look at the URL we used to save it, you will see that it starts with `indexeddb://`. This tells TensorFlow.js where to store it.

## Step 6: Put It Together

All right, so we now have a fast, offline way to get our model. So, for any subsequent page loads, we should always load from IndexedDB, right?

Not exactly.

Of course, we want speed, so we should prefer IndexedDB, but bear in mind that it is not 100% reliable.

Your saved data might no longer be available in any of these scenarios:

- The user is browsing in private/incognito mode
- The user clears site data, or their entire browser data
- The browser decides to make space when the device is running out of storage

In times like this, old HTTP can still come to our rescue.

We try to fetch the model from IndexedDB first, because it is quicker, but if that fails, we fetch it from HTTP and save it again to IndexedDB.

```js
async function fetchModel() {
  try {
    // Try loading locally saved model
    const model = await loadLayersModel(MODEL_INDEXEDDB_URL);
    console.log("Model loaded from IndexedDB");

    return model;
  } catch (error) {
    // If local load fails, get it from the server
    try {
      const model = await loadLayersModel(
        window.location.href + MODEL_HTTP_URL
      );
      console.log("Model loaded from HTTP.");

      // Store the downloaded model locally for future use
      await model.save(MODEL_INDEXEDDB_URL);
      console.log("Model saved to IndexedDB.");

      return model;
    } catch (error) {
      console.error(error);
    }
  }
}
```

There! Nice and robust!

## Step 7: Make Predictions

Now that our function is ready, time has come to put it to some good use.

What we need here is the `predict` method on our model. It takes a [tensor](https://js.tensorflow.org/tutorials/core-concepts.html) data type as an input.

Tensors are, in really simplified terms, n-dimensional arrays of fixed size and fixed data type.

Our digit recognition model is designed to accept a four-dimensional tensor as input. The shape of the tensor needs to be `[1, 28, 28, 1]`. This means that the first dimension will have length `1`, the second will have length `28`, and so on.

The output is also a tensor of which the second dimension is a one-hot encoded array of predictions. We can determine the result using `argMax` on this dimension.

Translating all this information into code will result in:

```js
async function predict(input, model) {
  const prediction = model.predict(input.reshape([1, 28, 28, 1]));
  const result = await prediction.argMax(1).data();
  return result[0];
}
```

The input in this case is the user-drawn digit on a Web page, transformed into a tensor type. How to do that is, again, a long story, but you can always refer to [my repository](https://github.com/dar5hak/offline-mnist) for that.

For a live demo, check out [my implementation](https://dar5hak.github.io/offline-mnist/).

## Conclusion

We wanted to make neural network predictions offline. To do so, we trained a model and fetched it from HTTP into our Web application. We then stored it to IndexedDB for later use.

In every subsequent call, we tried to load the model from IndexedDB, thus saving a network call, failing which we fell back to fetching it again from HTTP.

This is the simplest use case for making predictions, and I hope you can now get started with more advanced applications of offline-first machine learning.

Keep learning, and keep your machines learning.

#### Update 2019-08-04

Changed the code to work with TensorFlow.js 1.x.
