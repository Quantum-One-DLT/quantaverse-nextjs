import React from 'react';
import { Container } from 'reactstrap';
import Head from 'next/head';

import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"/>
      <title>QuantaVerse ID</title>
    </Head>
    <main id="app" className="d-flex flex-column h-100" data-testid="layout" style={{background: "linear-gradient(to right top, #1e2022, #2d424f, #316a7c, #2794a8, #06c1ce, #04cede, #02dcee, #00e9ff, #00d7ff, #00c3ff, #00aeff, #0096ff)", height: '100vh'}}>
      <NavBar />
      <NavBar />
      <Container className="flex-grow-1 mt-5">{children}</Container>
      <Footer />
    </main>
  </>
);

export default Layout;
