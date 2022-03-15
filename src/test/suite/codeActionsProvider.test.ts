import * as assert from "assert";
import * as vscode from "vscode";
import provider from "../../codeActionsProvider";
import { doc } from "./testutils";

suite("codeActionsProvider", () => {
  suite("provideCodeActions", () => {
    test("return code action if line starts with it.todo", async () => {
      const document = await doc("it.todo('')", "javascript");
      const actions = provider.provideCodeActions(
        document,
        document.lineAt(0).range,
        {
          triggerKind: vscode.CodeActionTriggerKind.Invoke,
          diagnostics: [],
          only: undefined,
        },
        new vscode.CancellationTokenSource().token
      ) as vscode.CodeAction[];

      assert.strictEqual(actions[0].title, "Implement");
    });
    test("return code action if line starts with test.todo", async () => {
      const document = await doc("test.todo('')", "javascript");
      const actions = provider.provideCodeActions(
        document,
        document.lineAt(0).range,
        {
          triggerKind: vscode.CodeActionTriggerKind.Invoke,
          diagnostics: [],
          only: undefined,
        },
        new vscode.CancellationTokenSource().token
      ) as vscode.CodeAction[];

      assert.strictEqual(actions[0].title, "Implement");
    });
    test("return empty", async () => {
      const document = await doc("asdfgadhfgs", "javascript");
      const actions = provider.provideCodeActions(
        document,
        document.lineAt(0).range,
        {
          triggerKind: vscode.CodeActionTriggerKind.Invoke,
          diagnostics: [],
          only: undefined,
        },
        new vscode.CancellationTokenSource().token
      ) as vscode.CodeAction[];

      assert.strictEqual(actions.length, 0);
    });
  });
});
