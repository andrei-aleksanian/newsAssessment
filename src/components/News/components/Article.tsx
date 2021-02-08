import React from 'react'

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

export default function Article({}: ArticleProps) {
    return (
        <div role="article">
            
        </div>
    )
}
