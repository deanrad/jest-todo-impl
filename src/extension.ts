import * as vscode from "vscode";
import { registerCodeActionsProvider } from "./impl";

export function activate({ subscriptions }: vscode.ExtensionContext) {
  subscriptions.push(registerCodeActionsProvider());
}

export function deactivate() {}
