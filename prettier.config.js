const options = {
  //No parentheses are added when there is only one parameter. Parentheses are omitted for arrow functions with a single parameter.
  arrowParens: "avoid",
  // Prettier adds a space between the opening and closing brackets
  bracketSpacing: true,
  // Prettier will use Unix-style line endings (LF - Line Feed) for all line breaks in the formatted file.
  endOfLine: "lf",
  //Prettier will automatically insert semicolons at the end of statements:
  semi: true,
  //specify the desired number of spaces
  tabWidth: 2,
  trailingComma: "none",
};

module.exports = options;
