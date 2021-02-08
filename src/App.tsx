import React from 'react';

import classes from './App.module.css'
import News from './components/News';
import {ArticleProps} from './components/News/components/Article'

// Testing purposes
const mockArticles = [
  {
      source: {
          id: "",
          name: "name"
      },
      author: "",
      title: "mockArticle",
      description: "foo",
      url: "/",
      urlToImage: "/",
      publishedAt: "2021-01-14T00:57:27Z",
      content: ""
  },
  {
    source: {
        id: "",
        name: "name"
    },
    author: "",
    title: "mockArticle",
    description: "foo",
    url: "/",
    urlToImage: "/",
    publishedAt: "2021-01-14T00:57:27Z",
    content: ""
},
{
  source: {
      id: "",
      name: "name"
  },
  author: "",
  title: "mockArticle",
  description: "foo",
  url: "/",
  urlToImage: "/",
  publishedAt: "2021-01-14T00:57:27Z",
  content: ""
},
{
  source: {
      id: "",
      name: "name"
  },
  author: "",
  title: "mockArticle",
  description: "foo",
  url: "/",
  urlToImage: "/",
  publishedAt: "2021-01-14T00:57:27Z",
  content: ""
},
{
  source: {
      id: "",
      name: "name"
  },
  author: "",
  title: "mockArticle",
  description: "foo",
  url: "/",
  urlToImage: "/",
  publishedAt: "2021-01-14T00:57:27Z",
  content: ""
}
] as ArticleProps[] 

export const getArticles = (page: number) => {
    return []
}

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
      <News articles={mockArticles}/>
      <Footer />
    </div>
  );
}

export default App;
