import React from 'react'

import classes from './Article.module.css'

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

export default function Article({title, url, source: {name}, publishedAt}: ArticleProps) {
    return (
        <div role="article" className={classes.Article}>
            <a href={url}><h4 role="title">{title}</h4></a>
            <div>
                <span>{publishedAt}</span>
                <span className={classes.Source}>{name}</span>
            </div>
        </div>
    )
}
