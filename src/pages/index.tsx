import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Link to="why-options">Why Options</Link>
    </Layout>
  );
};

export default IndexPage;