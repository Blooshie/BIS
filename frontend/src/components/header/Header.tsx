import React, { Component } from 'react';
import './Header.css';

class Header extends React.Component {

  render() {
    return (
      <>
        <header>
          <div id="logo">BRODOSPLIT</div>
          <div id="evidencija">Evidencija ulaza i izlaza</div>
        </header>

      </>
    );
  }
}

export default Header;