export const getReplacementText = (
  line: string,
  indentation: number = 0
): string =>
  //prettier-ignore
  line
    .replace(".todo", "")
    .replace(
      ")",
      `, () => {
${" ".repeat(indentation * 2)}// Arrange
${" ".repeat(indentation * 2)}// Act
${" ".repeat(indentation * 2)}// Await?
${" ".repeat(indentation * 2)}// Assert
${" ".repeat(indentation)}})`
    );
