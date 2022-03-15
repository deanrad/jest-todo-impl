export const getReplacementText = (line: string, indentation: number): string =>
  line
    .replace(".todo", "")
    .replace(
      ")",
      `, () => {\n${" ".repeat(indentation * 2)}\n${" ".repeat(indentation)}})`
    );
