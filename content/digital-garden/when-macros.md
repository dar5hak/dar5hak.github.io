+++
title = "When to use macros"
+++

While learning about Lisps and their macro systems, I have identified the following cases when writing a macro is a better (or only) way to gain a level of abstraction.

- When you what to choose which arguments are evaluated, you can do it trivially in a macro. This is impossible in a function, because all arguments are evaluated before being passed to it.
- When you want to evaluate the arguments more than once, such was while defining some kind of loop, you can only do it with a macro.
- Macros are expanded at compile time, so when you know enough about an operation beforehand, you can save doing the same work at runtime.
- Because macros are expanded inline, they can access the scope of the caller, so you can read or write variables in the containing scope. This is dangerous but can be powerful at times.
- If you have a repeated code pattern, with the unique part sandwiched between the repetitive parts, you can pass the unique part as an argument to a macro which does the sandwiching for you. The names of such macros usually start with `with-`. A common use case is to access an external resource, do something with it and clean up afterwards.