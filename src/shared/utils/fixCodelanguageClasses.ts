export const fixCodeLanguageClasses = (html: string): string => {
  return html
    .replace(/language-\w+/g, "language-javascript")
    .replace(/style/g, "");
};
