# Ecommerce App

A small ecommerce storefront built with React and Vite. This project demonstrates a simple product list, product cards, and a cart using modern React patterns: hooks (`useReducer`, custom hooks), Context for app-level state, and a lightweight store structure.

## Key Features

- Product listing with cards and ratings
- Add / remove items to cart, quantity management
- Cart persisted in a simple store/context layer
- Uses React hooks: `useReducer`, Context API, and custom hooks (e.g. `useWindowSize`)

## Tech Stack

- React
- Vite (dev tooling)
- Yarn (package manager)
- Plain JS, CSS modules / component styles

## Project Structure (important files)

- `src/Components/` — UI components (ProductCard, ProductList, Cart, etc.)
- `src/Pages/` — Page components (Products, Cart, NotFound)
- `src/Context/ProductCartContext.js` — Context for cart state
- `src/Store/` — small store modules (`cart.js`, `categories.js`, `index.js`)
- `src/Hooks/` — custom hooks (for example `useWindowSize.js`)

## Hooks & State

This app uses React hooks and patterns for state management:

- `useReducer` — local reducer logic for cart operations in some components
- Context API (`ProductCartContext`) — provides cart state and dispatch/actions across the tree
- `src/Store` — modular store helpers for cart and categories used by components

There is also a component demonstrating a Redux-like approach in `src/Components/ReduxProductCart`.

## Getting Started (Yarn)

Install dependencies:

```zsh
yarn install
```

Run the development server (Vite):

```zsh
yarn dev
```

Build for production:

```zsh
yarn build
```

Preview the production build locally:

```zsh
yarn preview
```

If your `package.json` uses different script names (for example `start`), replace the command accordingly: `yarn start`.

## How to Work with Cart State

- To inspect cart logic, open `src/Context/ProductCartContext.js` and `src/Store/cart.js`.
- Actions supported typically include: `ADD_ITEM`, `REMOVE_ITEM`, `INCREMENT`, `DECREMENT`, and `CLEAR_CART` (implementation may vary).

## Contributing

- Add features or fix bugs via PRs.
- Keep changes small and focused; update `README.md` if you add new scripts or tooling.

## Troubleshooting

- If the dev server fails to start, make sure dependencies are installed and your Node version is compatible with Vite.
- Run `yarn install` again and check `package.json` scripts.

