import * as vscode from "vscode";
import createCodeAction from "./implementTodoCodeAction";

export default {
  provideCodeActions: (document, range) => {
    const line = document.lineAt(range.start);
    if (
      line.text.trim().startsWith("it.todo") ||
      line.text.trim().startsWith("test.todo")
    ) {
      return [createCodeAction(document, line)];
    }
    return [];
  },
} as vscode.CodeActionProvider;
