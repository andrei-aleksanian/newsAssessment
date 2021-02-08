import React, {useState, useEffect} from 'react';

import classes from './App.module.css'
import News from './components/News';
import {ArticleProps} from './components/News/components/Article'

export interface Source {
  name: string,
  id: string
}

export const getArticles = async (page: number) => {
    const url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=97813ea136014de38eb99d0c30fe6f6a&' +
          'pageSize=5&' + 
          `page=${page}`
          ;

    const res = await fetch(url);
    const data = await res.json();

    return data.articles;
}

export const getSources = (articles: ArticleProps[]) => {
  let sources = articles.map(a => a.source) as Source[];

  // I was trying to get unique objects here as my last step but didn't figure out how to do that yet
 
  return sources;
}

const App = () => {

  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([] as ArticleProps[])

  const Header = () => {
    const sources = getSources(articles);

    return (
      <div role="header" className={classes.Header}>
      <h1 role="h1">News</h1>
      <select role="select" defaultValue="">
        <option value="">Filter By Source</option>
        {sources.map((s:any) => <option key={s.id} value={s.id}>{s.name}</option>)}
      </select>
    </div>
    )
  }

  const Footer = () => (
    <div role="footer" className={classes.Footer}>
      <button onClick={() => setPage(page+1)} role="showMore" type="button">Show More</button>
    </div>
  )

  useEffect(() => {
    const setNewArticles = async () => {
      const newArticles = await getArticles(page);
      setArticles([...articles, ...newArticles])
    }

    setNewArticles();
  }, [page])

  return (
    <div role="newsWidget" className={classes.Widget}>
      <Header />
      <News articles={articles}/>
      <Footer />
    </div>
  );
}

export default App;
