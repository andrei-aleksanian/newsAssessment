import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('News Widget', () => {

  beforeEach(() => {
    render(<App />);
  })

  test('Widget is rendered', () => {
    const widget = screen.getByRole("newsWidget");
    expect(widget).toBeInTheDocument();
  });

  // Would be nice to test useEffect here

  describe('Header', () => { 
    test('Header is rendered', () => {
      const header = screen.getByRole("header");
      expect(header).toBeInTheDocument();
    });
    
    test('Header has a heading', () => {
      const heading = screen.getByRole("h1");
      expect(heading).toBeInTheDocument();
    });
    
    test('Header has a select input', () => {
      const heading = screen.getByRole("select");
      expect(heading).toBeInTheDocument();
    });
  })

  describe('News Space', () => { 
    test('News space is rendered', () => {
      const newsSpace = screen.getByRole("newsSpace");
      expect(newsSpace).toBeInTheDocument();
    });

    // Add news elements test for later
  })

  describe('Footer', () => { 
    test('Footer is rendered', () => {
      const footer = screen.getByRole("footer");
      expect(footer).toBeInTheDocument();
    });

    test('Footer has a button', () => {
      const button = screen.getByRole("showMore");
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('type', 'button');
    });
  })

  describe('getArticles', () => { 
    test('getArticles recieves articles', async () => {
      const articles = await App.getArticles();
      expect(articles.length).not.toEqual(null);
    });

    // test('getArticles returns type Article', async () => {
    //   const articles = await App.getArticles();
    //   expect(articles.length).not.toEqual(null);
    // });
  })


})

