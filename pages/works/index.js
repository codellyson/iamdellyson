import Head from "next/head";
import { Card } from "../../components/Card/Cards";
import Header from "../../components/Header";

export default function portfolio() {
  const works = [
    {
      title: "Druve",
      description: "Advertize Across WhatsApp Statuses",
      image: require("../../assets/images/druve.png"),
      link: "https://druve.com.ng",
      tools: "ReactJS, NextJS, SCSS",
    },
    {
      title: "Ajebuta.com",
      description:
        "Connect customers to nearby service providers, professionals",
      image: require("../../assets/images/ajebuta.png"),
      link: "https://ajebuta.com",
      tools: "ReactJS, SCSS",
    },
    {
      title: "NestCourt Estate",
      description: "NestCourt Estate is a multi-unit state ...",
      image: require("../../assets/images/nestcourt.png"),
      link: "https://nestcourt.com",
      tools: " NextJS, SCSS, MongoDB",
    },
    {
      title: "Vanilla Movie App",
      description: "A movie app built with JavaScript",
      image: require("../../assets/images/movieapp.png"),
      link: "https://vanilla-movie.iamdellyson.com",
      tools: "HTML, CSS, JavaScript",
    },
    {
      title: "Recognito",
      description:
        "An Optical Character Recognition Web App that extracts text from images",
      image: require("../../assets/images/recognito.png"),
      link: "https://recognito.iamdellyson.com",
      tools: "NextJS,Halfmoon,MongoDB",
    },
  ];
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
