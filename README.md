# Ban Nested Ternary Operators
This is a simple Deno linting rule to ban nested ternaries. Nesting them is bad practice and should be avoided for readability

For example:
```ts
const foo = "test" ? "ssesf" : "sgfs";

const sdfsdf = "test" ? foo ? "bar" : "tes" : "sdfs";
                        //^ Error: Nested ternaries are banned
```
