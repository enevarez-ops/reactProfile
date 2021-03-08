import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Home from "../Home"
import Projects from "../Projects"
import Resume from "../Resume"

const Nav = () => {
    const renderHome = () => {
        return <Home />
    }
    const renderPortfolio = () => {
        return <Projects />
    }
    const renderResume = () => {
        return <Resume />
    }

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/projects" onClick={renderPortfolio}>
        Projects
      </Link>
      <Link color="inherit" href="/" onClick={renderHome}>
        Home
      </Link>
      <Link
        color="inherit"
        href="/resume"
        onClick={renderResume}
        aria-current="page"
      >
        Resume
      </Link>
    </Breadcrumbs>
  );
}


export default Nav;