import * as assert from "assert";
import * as vscode from "vscode";
import createCodeAction from "../../implementTodoCodeAction";
import * as sinon from "sinon";
import { getReplacementText } from "../../utils";
import { doc } from "./testutils";

suite("implementTodoCodeAction", () => {
  test("creates a code action", async () => {
    const mockWorkspaceEdit = sinon.createStubInstance(vscode.WorkspaceEdit);
    const content = "it.todo('asdf')";
    const document = await doc(content, "javascript");
    const line = document.lineAt(0);
    const action = createCodeAction(document, line, mockWorkspaceEdit);
    const expectedText = getReplacementText(content);
    assert.strictEqual(action.title, "Implement");
    assert.notStrictEqual(action.command, {
      title: "move cursor down",
      command: "cursorDown",
    });
    assert.strictEqual(
      mockWorkspaceEdit.replace.calledOnceWithExactly(
        document.uri,
        line.range,
        expectedText
      ),
      true,
      `replace not called with the right arguments.
      expected: ${[document.uri, document.lineAt(0).range, expectedText].join()}
      actual: ${Array.from(mockWorkspaceEdit.replace.args[0]).join()}`
    );
  });
});
