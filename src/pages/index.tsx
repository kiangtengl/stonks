import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import "katex/dist/katex.min.css";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <h3>Start Here</h3>
      <ul>
        <li>
          <Link to="options">Options</Link>
        </li>
        <li>
          <Link to="options">Greeks</Link>
        </li>
      </ul>
      <h3>Strategies</h3>
      <ul>
        <li>
          <Link to="covered_call">Covered Call</Link>
        </li>
      </ul>
    </Layout>
  );
};

export default IndexPage;
