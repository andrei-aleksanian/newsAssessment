import React from 'react'

import classes from "./News.module.css"

export interface ArticleProps {
    source: {
        id: string,
        name: string
    },
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
}

export interface NewsProps {
    articles: ArticleProps[]
}

const News = ({articles}: NewsProps) => {
    return (
        <div role="newsSpace" className={classes.News}>
            
        </div>
    )
}

export default News;