# jest-todo-impl

This vscode extension adds a code action to convert jest todos into implementations. If you have `it("do this later", () => {})`, jest will mark that as a passing test, which could be easily forgotten. However, `it.todo("do this later")` jest will report this as a todo in the output giving you a visual reminder that there is more to do. This allows you to sketch out all the tests you would like to have for a given feature and then quickly implement them as you go.

## Features

`cmd + .` on mac or `Ctrl + .` on windows/linux while the cursor is on the line with the todo test will show a quickfix that will transform the test into a stub implementation.

`it.todo("blah")` ➡ `it("blah", () => {})`

`test.todo("blah")` ➡ `test("blah", () => {})`

**Enjoy!**
