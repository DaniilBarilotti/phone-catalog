# Phone Catalog

A React and TypeScript storefront frontend for phones, tablets and accessories.

[Live demo](https://daniilbarilotti.github.io/phone-catalog/) · [Portfolio](https://daniilbarilotti.github.io/Portfolio/)

## What to try

1. Open a category and change sorting and page size.
2. Open a product, inspect its capacity and colour variants.
3. Add products to the cart and favourites, then reload the page.

## Features

- Product categories and detail pages with variant selection.
- URL-based sorting and pagination.
- Cart quantities and favourites persisted in localStorage.
- Reusable product cards and responsive SCSS layouts.

## Stack and structure

React · TypeScript · Redux Toolkit · React Router · SCSS · Create React App.

| Directory | Responsibility |
| --- | --- |
| `src/pages/` | Category, product detail, cart and favourites screens |
| `src/components/` | Reusable presentation components |
| `src/features/` | Redux slices for products, cart and favourites |
| `src/services/` | Product-data requests and helper functions |
| `public/api/` | Static JSON product catalogue |

## Run locally

```bash
git clone https://github.com/DaniilBarilotti/phone-catalog.git
cd phone-catalog
npm ci
npm start
```

`npm run build` creates the production build. This project uses an older Create React App toolchain; dependency installation and builds should be checked in the intended Node environment before deployment.

## Scope

Learning / portfolio frontend, not a live shop. Product data comes from static JSON; there is no payment processing, authentication, order fulfilment or custom backend. Browser storage is device-specific.

## Engineering discussion

The cart slice maintains quantities and total count; reducers persist cart state to localStorage. URL parameters make category views shareable. A useful next improvement is moving storage side effects out of reducers and validating saved data before loading it.
