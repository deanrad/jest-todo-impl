import * as vscode from "vscode";
import codeActionsProvider from "./codeActionsProvider";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerCodeActionsProvider(
      [{ language: "typescript" }, { language: "javascript" }],
      codeActionsProvider
    )
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
