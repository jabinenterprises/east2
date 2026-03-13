# Laravel + React + Tailwind CSS Complete Guide

A comprehensive step-by-step tutorial for building a Laravel application using:

- Laravel (backend)
- React (frontend via Inertia)
- Tailwind CSS (styling)
- Authentication

---

# Table of Contents

1. Requirements
2. Create New Laravel Project
3. Install React + Inertia
4. Install Tailwind CSS
5. Project Structure Overview
6. Create Your First Page
7. Create a General Layout (Header + Footer)
8. Routing with Inertia
9. Passing Data from Laravel to React
10. Working with Tailwind
11. Production Build
12. Authentication Setup
13. Protecting Routes
14. Final Notes

---

# 1. Requirements

Make sure you have installed:

- PHP 8.2+
- Composer
- Node.js (v18+ recommended)
- NPM

---

# 2. Create a New Laravel Project

```bash
composer create-project laravel/laravel myapp
cd myapp
```

---

# 3. Install React + Inertia

## Install Inertia Server-Side Adapter

```bash
composer require inertiajs/inertia-laravel
```

## Install React Frontend Dependencies

```bash
npm install react react-dom
npm install @inertiajs/react
```

## Install Vite React Plugin

```bash
npm install @vitejs/plugin-react
```

Update `vite.config.js`:

```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
});
```

---

# 4. Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update `tailwind.config.js`:

```js
export default {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.jsx',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
```

Update `resources/css/app.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

# 5. Project Structure Overview

After setup, create this structure:

```
resources/
  js/
    Pages/
    Components/
    Layouts/
    app.jsx
  css/
    app.css
views/
  app.blade.php
```

---

# 6. Configure Root Blade File

Create:

```
resources/views/app.blade.php
```

```blade
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    @vite('resources/js/app.jsx')
    @inertiaHead
</head>
<body class="antialiased">
    @inertia
</body>
</html>
```

---

# 7. Configure React Entry File

Create:

```
resources/js/app.jsx
```

```jsx
import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';

createInertiaApp({
    resolve: (name) => import(`./Pages/${name}.jsx`),
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
```

---

# 8. Create Your First Page

Create:

```
resources/js/Pages/Home.jsx
```

```jsx
import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <>
            <Head title="Home" />

            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <div className="text-center">
                    <h1 className="mb-4 text-4xl font-bold">
                        Welcome to Laravel + React
                    </h1>

                    <p className="text-gray-600">Your first page is working!</p>
                </div>
            </div>
        </>
    );
}
```

---

# 9. Define Route

Open:

```
routes/web.php
```

```php
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});
```

---

# 10. Create General Layout (Header + Footer)

Create:

```
resources/js/Layouts/MainLayout.jsx
```

```jsx
import { Link } from '@inertiajs/react';

export default function MainLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="bg-gray-900 p-4 text-white">
                <nav className="container mx-auto flex justify-between">
                    <div className="font-bold">MyApp</div>

                    <div className="space-x-4">
                        <Link href="/" className="hover:underline">
                            Home
                        </Link>
                        <Link href="/about" className="hover:underline">
                            About
                        </Link>
                    </div>
                </nav>
            </header>

            <main className="container mx-auto flex-grow p-6">{children}</main>

            <footer className="bg-gray-800 p-4 text-center text-white">
                © {new Date().getFullYear()} MyApp
            </footer>
        </div>
    );
}
```

---

# 11. Use Layout in a Page

Update `Home.jsx`:

```jsx
import MainLayout from '../Layouts/MainLayout';

Home.layout = (page) => <MainLayout children={page} />;
```

---

# 12. Passing Data from Laravel to React

In route:

```php
Route::get('/', function () {
    return Inertia::render('Home', [
        'message' => 'Hello from Laravel'
    ]);
});
```

In React:

```jsx
export default function Home({ message }) {
    return <h1>{message}</h1>;
}
```

---

# 13. Run Development Server

```bash
npm run dev
php artisan serve
```

Visit:

```
http://127.0.0.1:8000
```

---

# 14. Production Build

```bash
npm run build
```

Deploy normally like a standard Laravel app.

---

# 15. Add Authentication

Install Laravel Breeze with React + Inertia:

```bash
composer require laravel/breeze --dev
php artisan breeze:install react
npm install
npm run dev
php artisan migrate
```

You now have:

- Login
- Register
- Password reset
- Authenticated dashboard

---

# 16. Protect Routes

In `routes/web.php`:

```php
Route::middleware(['auth'])->group(function () {
    Route::get('/profile', function () {
        return Inertia::render('Profile');
    });
});
```

---

# 17. Access Authenticated User in React

```jsx
import { usePage } from '@inertiajs/react';

const { auth } = usePage().props;
```

---

# Final Architecture Summary

You now have:

- Laravel handling backend logic
- React handling UI and state
- Tailwind handling styling
- Inertia connecting backend and frontend
- Authentication ready
- SEO-friendly routing
- SPA navigation experience

This setup is ideal for:

- Public-facing apps
- Interactive platforms
- Applications that may require login later
- SEO-sensitive projects

---

# Recommended Folder Structure (Final)

```
resources/js/
  Pages/
  Components/
  Layouts/
  Hooks/
  Utils/
```

Keep logic separated and scalable from the beginning.

---

End of Guide.
