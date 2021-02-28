import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import "katex/dist/katex.min.css";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <b>Start Here</b>
      <Link to="options">Options</Link>
      <Link to="options">Greeks</Link>
      <ul>
        <li>
          <b>
            Strategies
            <ul>
              <li>
                <Link to="options">Greeks</Link>
              </li>
            </ul>
          </b>
        </li>
      </ul>
    </Layout>
  );
};

export default IndexPage;
