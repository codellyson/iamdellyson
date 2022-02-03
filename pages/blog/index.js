import axios from "axios";
import React, { useEffect } from "react";
import data from "../../assets/data/dellyson-stories-copy.json";
// import fs from "fs";
import path from "path";
import Link from "next/link";
function index({}) {
  // useEffect(() => {
  //   axios
  //     .get("../../dellyson-stories-copy.json")
  //     .then((response) => console.log(response.data))
  //     .then((error) => console.log(error));
  // }, []);
  console.log(data);

  return (
    <section>
      <h1>Coming soon...</h1>
    </section>
  );
}

export default index;
// export async function getStaticPaths() {
//   const filePaths = fs.readdirSync(path.join("Post"), "utf8");
//   console.log(filePaths);
//   const paths = filePaths.map((file) => {
//     return file.replace("-", " ");
//   });
//   return {
//     // paths,
//     fallback: false,
//   };
// }
