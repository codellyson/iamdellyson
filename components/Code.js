import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark, darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Code = ({ children, language, data }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={darcula}
      wrapLines={true}
      showLineNumbers={true}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default Code;
