import * as vscode from "vscode";

export async function doc(content: string, language?: string) {
  return await vscode.workspace.openTextDocument({
    language,
    content,
  });
}
