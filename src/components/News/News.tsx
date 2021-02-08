import React from 'react'

import Article, {ArticleProps} from './components/Article'

import classes from "./News.module.css"

export interface NewsProps {
    articles: ArticleProps[]
}

const News = ({articles}: NewsProps) => {
    return (
        <div role="newsSpace" className={classes.News}>
            {articles.map(a => <Article key={a.url} {...a}/>)}
        </div>
    )
}

export default News;