export const getReplacementText = (
  line: string,
  indentation: number = 0
): string =>
  line
    .replace(".todo", "")
    .replace(
      ")",
      `, () => {\n${" ".repeat(indentation * 2)}\n${" ".repeat(indentation)}})`
    );
