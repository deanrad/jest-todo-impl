import * as assert from "assert";

import * as vscode from "vscode";
import * as sinon from "sinon";
import { registerCodeActionsProvider } from "../../impl";
import codeActionsProvider from "../../codeActionsProvider";

suite("impl", () => {
  test("registers code actions provider", () => {
    const spy = sinon.spy(vscode.languages, "registerCodeActionsProvider");
    registerCodeActionsProvider();
    assert.strictEqual(
      spy.calledOnceWithExactly(
        [{ language: "typescript" }, { language: "javascript" }],
        codeActionsProvider
      ),
      true
    );
  });
});
