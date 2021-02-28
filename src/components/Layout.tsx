import React from "react";
import styled from "@emotion/styled";
import { MDXProvider } from "@mdx-js/react";
import { graphql, Link } from "gatsby";
import Helmet from "react-helmet";
import TOC from "../components/TOC";

const breakpoints = {
  desktop: `@media (min-width: ${576}px)`,
};

const Page = styled.nav`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: rgb(5, 5, 5);
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-size: 0.9em;

  ${breakpoints.desktop} {
    width: 576px;
    margin: 0 auto;
  }
`;

const Header = styled.nav`
  display: flex;
  width: 100%;
  border-bottom: 1px solid;
  align-items: center;
`;

const Title = styled(Link)`
  flex-grow: 1;
  font-size: 20px;
  color: black;
  text-decoration: none;
  padding: 20px 0;
  font-weight: bold;
`;

const Content = styled.main`
  padding: 15px 0;
`;

const H1 = styled.h1``;

const H2 = styled.h2`
  margin: 0;
  font-size: 1.1em;
`;

const H3 = styled.h3`
  margin: 0;
`;

const P = styled.p`
  font-size: 1em;
`;

const Blue = styled.span`
  color: rgb(24, 119, 242);
`;

const Teal = styled.span`
  color: rgb(42, 187, 167);
`;
const Green = styled.span`
  color: rgb(69, 189, 98);
`;
const Yellow = styled.span`
  color: rgb(247, 185, 40);
`;
const Red = styled.span`
  color: rgb(243, 66, 95);
`;
const Pink = styled.span`
  color: rgb(255, 102, 191);
`;
const Purple = styled.span`
  color: rgb(147, 96, 247);
`;

const Blockquote = styled.blockquote`
  color: rgb(101, 103, 107);
  border-left: 1px solid rgb(101, 103, 107);
  padding-left: 20px;
`;

const Footnotes = styled.div`
  font-size: 0.8em;
`;

function Providers(props) {
  return (
    <MDXProvider
      components={{
        h1: H1,
        h2: H2,
        h3: H3,
        p: P,
        blockquote: Blockquote,
        Link,
        TOC,
        Blue,
        Teal,
        Green,
        Yellow,
        Red,
        Pink,
        Purple,
        wrapper: ({ children, ...props }) => {
          const updatedChildren = children.map((child) => {
            if (child.props.className === "footnotes") {
              return <Footnotes key={1} {...child.props} />;
            }
            return child;
          });
          return <>{updatedChildren}</>;
        },
      }}
    >
      <Helmet title="Stonks only go ___?"></Helmet>
      {props.children}
    </MDXProvider>
  );
}

export default function Layout(props) {
  return (
    <Providers>
      <Page>
        <Header>
          <Title to="/">Stonks only go ___?</Title>
          <p>not investment advice</p>
        </Header>
        <Content>{props.children}</Content>
      </Page>
    </Providers>
  );
}
