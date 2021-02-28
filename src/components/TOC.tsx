import React from "react";
import Slugger from "github-slugger";
import { graphql, Link, useStaticQuery } from "gatsby";

const slugger = new Slugger();

export default function TOC({ metatdata }) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx {
        edges {
          node {
            headings {
              value
              depth
            }
          }
        }
      }
    }
  `);

  console.log(data);
  const headings = data.headings;

  return JSON.stringify(data);
  // <ul>
  //   {headings
  //     .filter((heading) => heading.depth !== 1)
  //     .map((heading) => (
  //       <li key={heading.value}>
  //         <Link to={"#" + slugger.slug(heading.value)}>{heading.value}</Link>
  //       </li>
  //     ))}
  // </ul>
}
