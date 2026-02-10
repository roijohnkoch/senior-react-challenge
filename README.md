# User Admin Dashboard

## Project Overview

The **User Admin Dashboard** is a client-side admin screen built with **Next.js** and **React** for managing users.  
It supports searching, filtering, pagination, and viewing user details, using a clean and scalable data-fetching architecture powered by **TanStack React Query**.

The app consumes user data from **DummyJSON**, a public fake REST API, and demonstrates production-ready pagination and state-management patterns.

---

## Features

- Users table with loading and empty states
- Server-side search and pagination
- Client-side filtering (e.g. gender)
- User details modal
- Error handling and retry support

---

## Tech Stack

- **Next.js (App Router)**  
  https://nextjs.org/docs

- **React**  
  https://react.dev/

- **TypeScript**  
  https://www.typescriptlang.org/docs/

- **TanStack React Query**  
  https://tanstack.com/query/latest/docs/react/overview

- **DummyJSON (Users API)**  
  https://dummyjson.com/docs/users

---

## Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
```

### 2. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.