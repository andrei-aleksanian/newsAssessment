import React from 'react';
import { render, screen } from '@testing-library/react';
import News from './News';
import Article, {ArticleProps} from './components/Article'

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

describe('News Space', () => {
    beforeEach(() => {
        render(<News articles={mockArticles}/>);
    })

    test('News Space renders with articles', ()=> {
        const articles = screen.getAllByRole('article')
        expect(articles.length).not.toEqual(0)
    })

    describe('Article', () => {
        beforeEach(() => {
            render(<Article {...mockArticles[0]}/>);
        })
        test('Article is rendered', ()=> {
            const articles = screen.getAllByRole('article')
            expect(articles.length).not.toEqual(0)
        })
    })
})
