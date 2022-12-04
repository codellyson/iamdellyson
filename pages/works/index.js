import Head from "next/head";
import { works } from "../../assets/data/portfolio";
import { Card } from "../../components/Card/Cards";
import Header from "../../components/Header";

export default function portfolio() {
  return (
    <section>
      <Header>
        <div className="header-content">
          <h1>Portfolio</h1>
        </div>
      </Header>

      <div className="container">
        <Head>
          <title>Portfolio</title>
        </Head>

        <div className={"container"}>
          {works.map((work) => (
            <Card
              variant={"project"}
              content={work.description}
              title={work.title}
              tools={work.tools}
              path={work.link}
              workImage={work.image}
              key={work.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
