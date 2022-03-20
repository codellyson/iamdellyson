import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
export const Card = ({
  variant,
  children,
  title,
  date,
  author,
  content,
  tools,
  path,
  workImage,
}) => {
  switch (variant) {
    case "post":
      return (
        <div className="post">
          <div className="post-card">
            <h4 className="post-card-title">
              <Link as={`/blog/${path}`} href={`/blog/[slug]`}>
                <a className="blog-post-link">{title ? title : "N/A"}</a>
              </Link>{" "}
            </h4>
            <div className="post-meta-data">
              <span className="post-author">
                {author ? author : "John Doe"}{" "}
              </span>{" "}
              {" | "}
              <span className="post-date">
                <time dateTime="2020-01-01">
                  {date ? format(new Date(date), "PPP") : "January 1, 2020"}
                </time>
              </span>
            </div>
            <div className="post-card-content">
              <p>
                {content
                  ? content
                  : " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed  euismod, ipsum eget sagittis consectetur, nisi nunc."}
              </p>
            </div>
          </div>
        </div>
      );
    case "project":
      return (
        <div className="featured-work-card">
          <div className="featured-work-card-image">
            {/* get random image link from unsplash as an src */}
            <Image src={workImage} alt="featured work" layout="responsive" />
          </div>
          <div className="featured-work-card-content">
            <h4>
              <Link
                // as={`/blog/${path}`}
                href={path}
              >
                <a className="blog-post-link"> {title ? title : "N/A"}</a>
              </Link>
            </h4>

            <div className="work-meta-data">
              <time dateTime="2018" className="work-date">
                {date ? date : "N/A"}
              </time>
              <span className="work-type">
                {tools
                  ? tools.split(",").map((tool) => (
                      <span key={tool} className="btn btn-primary">
                        {tool}
                      </span>
                    ))
                  : "N/A"}
              </span>
            </div>

            <p className="work-description">{content ? content : "N/A"}</p>
          </div>
        </div>
      );
    default:
      return (
        <article className="card">
          <h2>{"heading"}</h2>
          {children}
        </article>
      );
  }
};
