# Laravel + React (TypeScript) + Tailwind CSS

## Production-Ready Architecture Guide

---

# Stack Overview

- Laravel (Backend)
- Inertia.js (Bridge)
- React (Frontend)
- TypeScript (Strict typing)
- Tailwind CSS (Styling)
- Laravel Breeze (Authentication)

---

# 1. Requirements

- PHP 8.2+
- Composer
- Node 18+
- NPM

---

# 2. Create New Laravel Project

```bash
composer create-project laravel/laravel myapp
cd myapp
```

---

# 3. Install Inertia + React + TypeScript

## Install Inertia (Server Side)

```bash
composer require inertiajs/inertia-laravel
```

## Install Breeze with React + TypeScript

```bash
composer require laravel/breeze --dev
php artisan breeze:install react --typescript
npm install
```

This installs:

- React
- TypeScript
- Inertia
- Auth scaffolding

Run:

```bash
php artisan migrate
npm run dev
```

---

# 4. Tailwind Configuration

Already installed via Breeze.

Verify:

## tailwind.config.js

```js
export default {
    content: ['./resources/**/*.blade.php', './resources/**/*.tsx'],
    theme: {
        extend: {},
    },
    plugins: [],
};
```

## resources/css/app.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

# 5. Production-Ready Folder Structure

```
resources/
  js/
    app.tsx
    types/
      index.d.ts
    Pages/
      Public/
        Home.tsx
        About.tsx
      Auth/
        Login.tsx
      Dashboard/
    Components/
      UI/
        Button.tsx
      Navigation/
        Navbar.tsx
      Layout/
        Footer.tsx
    Layouts/
      MainLayout.tsx
      AuthLayout.tsx
    Hooks/
      useAuth.ts
    Services/
      api.ts
    Utils/
      helpers.ts
    Constants/
      routes.ts
```

This structure supports scaling without chaos.

---

# 6. Root Blade File

resources/views/app.blade.php

```blade
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    @viteReactRefresh
    @vite('resources/js/app.tsx')
    @inertiaHead
</head>
<body class="antialiased">
    @inertia
</body>
</html>
```

---

# 7. app.tsx (Typed Setup)

resources/js/app.tsx

```tsx
import '../css/app.css';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import type { ReactNode } from 'react';

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true });
        return pages[`./Pages/${name}.tsx`] as any;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
```

---

# 8. Global Type Definitions

resources/js/types/index.d.ts

```ts
export interface AuthUser {
    id: number;
    name: string;
    email: string;
}

export interface PageProps {
    auth?: {
        user?: AuthUser;
    };
}
```

---

# 9. Create Main Layout

resources/js/Layouts/MainLayout.tsx

```tsx
import { ReactNode } from 'react';
import Navbar from '../Components/Navigation/Navbar';
import Footer from '../Components/Layout/Footer';

interface Props {
    children: ReactNode;
}

export default function MainLayout({ children }: Props) {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="container mx-auto flex-grow px-6 py-8">
                {children}
            </main>

            <Footer />
        </div>
    );
}
```

---

# 10. Navbar Component

resources/js/Components/Navigation/Navbar.tsx

```tsx
import { Link } from '@inertiajs/react';

export default function Navbar() {
    return (
        <header className="bg-gray-900 p-4 text-white">
            <div className="container mx-auto flex justify-between">
                <div className="text-lg font-bold">MyApp</div>

                <nav className="space-x-4">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <Link href="/about" className="hover:underline">
                        About
                    </Link>
                </nav>
            </div>
        </header>
    );
}
```

---

# 11. Footer Component

resources/js/Components/Layout/Footer.tsx

```tsx
export default function Footer() {
    return (
        <footer className="bg-gray-800 p-4 text-center text-white">
            © {new Date().getFullYear()} MyApp
        </footer>
    );
}
```

---

# 12. Create Home Page

resources/js/Pages/Public/Home.tsx

```tsx
import { Head } from '@inertiajs/react';
import MainLayout from '../../Layouts/MainLayout';

export default function Home() {
    return (
        <>
            <Head title="Home" />

            <div className="text-center">
                <h1 className="mb-4 text-4xl font-bold">
                    Welcome to Production Setup
                </h1>

                <p className="text-gray-600">
                    Laravel + React + TypeScript + Tailwind
                </p>
            </div>
        </>
    );
}

Home.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;
```

---

# 13. Define Route

routes/web.php

```php
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Public/Home');
});
```

---

# 14. Auth Structure

Breeze already provides:

- Login
- Register
- Forgot password
- Email verification

Protect routes:

```php
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard/Index');
    });
});
```

---

# 15. Access Auth User in React

```tsx
import { usePage } from '@inertiajs/react';
import { PageProps } from '@/types';

const { auth } = usePage<PageProps>().props;
```

---

# 16. Production Build

```bash
npm run build
```

Deploy normally like standard Laravel app.

---

# Final Production Benefits

- Strong typing across frontend
- Clean separation of concerns
- Scalable structure
- Layout system
- Auth ready
- SEO compatible
- SPA navigation
- Future extensibility

---

# Architecture Summary

Backend:

- Controllers
- Models
- Policies
- Services

Frontend:

- Pages (route-level)
- Layouts
- Components
- Hooks
- Services
- Types

---

END OF GUIDE
