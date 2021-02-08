import React from 'react';

import classes from './App.module.css'
import News from './components/News';

const App = () => {
  const Header = () => (
    <div role="header" className={classes.Header}>
      <h1 role="h1">News</h1>
      <select role="select" defaultValue="">
        <option value="">Filter By Source</option>
      </select>
    </div>
  )

  const Footer = () => (
    <div role="footer" className={classes.Footer}>
      <button role="showMore" type="button">Show More</button>
    </div>
  )

  return (
    <div role="newsWidget" className={classes.Widget}>
      <Header />
      <News />
      <Footer />
    </div>
  );
}

export default App;
