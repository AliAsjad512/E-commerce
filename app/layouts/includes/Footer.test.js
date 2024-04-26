import { render, screen, fireEvent } from '@testing-library/react';
// import Footer from '../includes/Footer';

import React from "react";

import '@testing-library/jest-dom';  

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/',
  }),
}));

describe('Footer', () => {
  test('renders correctly', () => {
    //render(<Footer />);
    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
  });

  test('renders buy section', () => {
  //  render(<Footer />);
  render
    const buySection = screen.getByText('Buy');
    expect(buySection).toBeInTheDocument();
  });

  test('renders sell section', () => {
    //render(<Footer />);
    const sellSection = screen.getByText('Sell');
    expect(sellSection).toBeInTheDocument();
  });

  test('renders about eBay section', () => {
    //render(<Footer />);
    const aboutEbaySection = screen.getByText('About eBay');
    expect(aboutEbaySection).toBeInTheDocument();
  });
});
