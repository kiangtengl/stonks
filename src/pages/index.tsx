import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import "katex/dist/katex.min.css";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Link to="options">Options</Link>
    </Layout>
  );
};

export default IndexPage;
