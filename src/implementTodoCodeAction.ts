import * as vscode from "vscode";
import { getReplacementText } from "./utils";

export default (
  document: vscode.TextDocument,
  line: vscode.TextLine,
  workspaceEdit?: vscode.WorkspaceEdit
): vscode.CodeAction => {
  const action = new vscode.CodeAction("Implement");
  action.edit = workspaceEdit ?? new vscode.WorkspaceEdit();
  action.edit.replace(
    document.uri,
    line.range,
    getReplacementText(line.text, line.firstNonWhitespaceCharacterIndex)
  );
  action.command = {
    title: "move cursor down",
    command: "cursorDown",
  };
  return action;
};
