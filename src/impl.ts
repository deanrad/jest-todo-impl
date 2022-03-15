import * as vscode from "vscode";
import codeActionsProvider from "./codeActionsProvider";

export const registerCodeActionsProvider = () =>
  vscode.languages.registerCodeActionsProvider(
    [{ language: "typescript" }, { language: "javascript" }],
    codeActionsProvider
  );
