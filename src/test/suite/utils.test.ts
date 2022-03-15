import * as assert from "assert";
import { getReplacementText } from "../../utils";

suite("utils", () => {
  suite("getReplacementText", () => {
    suite("it", () => {
      test("it.todo with semicolon", () => {
        assert.strictEqual(
          getReplacementText('it.todo("asdf");', 0),
          `it("asdf", () => {\n\n});`
        );
      });
      test("it.todo indented and with semicolon", () => {
        assert.strictEqual(
          getReplacementText('   it.todo("asdf");', 3),
          `   it("asdf", () => {\n      \n   });`
        );
      });
      test("does not replace 'todo' inside string", () => {
        assert.strictEqual(
          getReplacementText('it.todo("todo .todo it.todo");', 0),
          `it("todo .todo it.todo", () => {\n\n});`
        );
      });
    });
    suite("test", () => {
      test("test.todo with semicolon", () => {
        assert.strictEqual(
          getReplacementText('test.todo("asdf");', 0),
          `test("asdf", () => {\n\n});`
        );
      });
      test("test.todo indented and with semicolon", () => {
        assert.strictEqual(
          getReplacementText('   test.todo("asdf");', 3),
          `   test("asdf", () => {\n      \n   });`
        );
      });
      test("does not replace 'todo' inside string", () => {
        assert.strictEqual(
          getReplacementText('test.todo("todo .todo test.todo");', 0),
          `test("todo .todo test.todo", () => {\n\n});`
        );
      });
    });
  });
});
