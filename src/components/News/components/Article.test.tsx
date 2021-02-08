import React from 'react';
import { render, screen } from '@testing-library/react';
import Article, {ArticleProps} from './Article'

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
    }
] as ArticleProps[]

describe('Article', () => {
    beforeEach(() => {
        render(<Article {...mockArticles[0]}/>);
    })

    test('Article is rendered', ()=> {
        const article = screen.getByRole('article')
        expect(article).toBeInTheDocument()
    })

    test('Article has a title', ()=> {
        const title = screen.getByRole('title')
        expect(title).toBeInTheDocument()
        // expect(title.getAttribute('text')).toEqual(mockArticles[0].title)
    })

    // more tests like has url etc...
})
