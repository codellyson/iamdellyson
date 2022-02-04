import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Code = ({ children, language }) => {
  return (
    <SyntaxHighlighter language={language} style={dark}>
      {children}
    </SyntaxHighlighter>
  );
};

export default Code;
