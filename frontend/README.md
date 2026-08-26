# Sales App - Frontend

A modern e-commerce front-end web application built with **React**, **Vite**, and **Tailwind CSS** (or standard CSS). This project provides a full-featured shopping experience complete with product browsing, collection filtering, cart management, checkout forms, and user authentication pages.

---

## Features

* **Product Browsing**: Showcases latest collections, best sellers, and related products dynamically.
* **Search & Filter**: Search bar component for finding items and filtering through full product collections.
* **Shopping Cart & Checkout**: Integrated cart calculation and place-order flow with order tracking interface.
* **Global State Management**: React Context API (`ShopContext.jsx`) managing cart state, currency, search queries, and product data.
* **Responsive Navigation**: Full navbar, footer, policy details, and newsletter signup box.

---

## Project Structure

```text
frontend/
├── public/
├── src/
│   ├── assets/             # Static images, icons, and assets
│   ├── components/         # Reusable UI components
│   │   ├── BestSeller.jsx
│   │   ├── CartTotal.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LatestCollection.jsx
│   │   ├── Navbar.jsx
│   │   ├── NewsletterBox.jsx
│   │   ├── OurPolicy.jsx
│   │   ├── ProductItem.jsx
│   │   ├── RelatedProducts.jsx
│   │   ├── SearchBar.jsx
│   │   └── Title.jsx
│   ├── context/            # React Context for global state
│   │   └── ShopContext.jsx
│   ├── pages/              # Main route views/pages
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Collection.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Orders.jsx
│   │   ├── PlaceOrder.jsx
│   │   └── Product.jsx
│   ├── App.jsx             # Main application layout & routing
│   ├── index.css           # Global styling
│   └── main.jsx            # Application entry point
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js

```

---

## Tech Stack

* **Framework/Library**: [React](https://react.dev/)
* **Build Tool**: [Vite](https://vitejs.dev/)
* **State Management**: React Context API
* **Linting & Formatting**: ESLint

---

## Getting Started

### Prerequisites

Ensure you have **Node.js** (v16+ recommended) and **npm** or **yarn** installed on your machine.

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend

```


2. Install dependencies:
```bash
npm install

```


3. Start the development server:
```bash
npm run dev

```


4. Build for production:
```bash
npm run build
