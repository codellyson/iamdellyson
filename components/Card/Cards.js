export const BlogCard = ({ children, heading }) => {
  return (
    <article className="blog-card">
      <h2>{heading}</h2>
      {children}
    </article>
  );
};
