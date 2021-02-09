import React from "react";
import styled from "@emotion/styled";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

const breakpoints = {
  desktop: `@media (min-width: ${576}px)`,
};

const shortcodes = {
  Link,
};

const Page = styled.nav`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  display: flex;
  flex-direction: column;
  padding: 10px;

  ${breakpoints.desktop} {
    width: 576px;
    margin: 0 auto;
  }
`;

const Header = styled.nav`
  display: flex;
  width: 100%;
  border-bottom: 1px solid;
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

const NavLink = styled.li``;

const H1 = styled.h1`
  margin: 0;
`;

const H2 = styled.h2`
  margin: 0;
`;

const H3 = styled.h3`
  margin: 0;
`;

function Providers({ children }) {
  return (
    <MDXProvider
      shortcodes={shortcodes}
      components={{
        h1: H1,
        h2: H2,
        h3: H3,
      }}
    >
      <Helmet title="Stonks only go ___?" />
      {children}
    </MDXProvider>
  );
}

export default function Layout({ children }) {
  return (
    <Providers>
      <Page>
        <Header>
          <Title to="/">Stonks only go ___?</Title>
        </Header>
        <Content>{children}</Content>
      </Page>
    </Providers>
  );
}
