import React from "react";

function InlineCode({ children, ...rest }) {
  return (
    <code {...rest} className="blog-inline-code">
      {children}
    </code>
  );
}

export default InlineCode;
