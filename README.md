Certainly! Here’s the complete, updated `README.md` based on your project structure and details:

---

# Quiz Game

A full-stack quiz game built with **Next.js**, **React**, **PostgreSQL**, and **Drizzle ORM**. The app allows users to answer quiz questions, view their score, and reset the quiz. It also integrates a PostgreSQL database to store questions and results, along with Docker for local development.

## Features

- **Timed Quiz**: Users are given a set amount of time (default 15 seconds) to answer each question.
- **Multiple Choice**: Each question has multiple answer options.
- **Real-time Score**: User's score is updated in real-time as they answer questions correctly.
- **Reset Option**: Users can reset the quiz to start over.

## Tech Stack

- **Frontend**:
  - **React** - For building the user interface.
  - **Next.js** - For server-side rendering, routing, and API routes.
  - **TailwindCSS** - For styling the components.
  - **React Query** - For data fetching and caching.
  - **Inter Font (Google Fonts)** - The primary font used in the app.
  
- **Backend**:
  - **Node.js (Next.js API routes)** - For backend logic and serving API endpoints.
  - **Drizzle ORM** - For interacting with the PostgreSQL database.
  - **PostgreSQL** - A relational database to store questions and user scores.

- **Development Tools**:
  - **Docker** - For containerizing the PostgreSQL database.
  - **TypeScript** - For type safety and development efficiency.
  - **ESLint** - For maintaining code quality.
  - **PNPM** - For efficient package management.

## Project Structure

```
/drizzle
├── meta
│   └── 0000_daily_stranger.sql     # SQL migration for daily stranger data

/public
├── file.svg
├── globe.svg
├── next.svg
├── vercel.svg
└── window.svg

/src
├── /app
│   ├── /api
│   │   └── /questions
│   │       └── route.ts          # API endpoint for fetching quiz questions
│   ├── favicon.ico               # Favicon for the app
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Layout for the app, including global styles and metadata
│   ├── page.tsx                  # Main page of the quiz app
│   └── providers.tsx             # Providers for the app (React Query, etc.)

├── /components
│   └── quiz.tsx                  # Main quiz component, which renders the quiz questions and score

├── /db
│   ├── insert_questions.sql      # SQL file for inserting questions into the database
│   ├── schema.ts                 # Drizzle ORM schema definition for the database

├── /hooks
│   └── useQuestions.ts           # Custom hook for fetching and managing quiz questions

├── .eslintrc.json                # ESLint configuration file
├── .gitignore                    # Git ignore file
├── README.md                     # Project documentation
├── docker-compose.yaml           # Docker configuration for running PostgreSQL
├── drizzle.config.ts             # Drizzle ORM configuration
├── next.config.ts                # Next.js configuration file
├── package.json                  # Project dependencies and scripts
├── pnpm-lock.yaml                # PNPM lockfile for managing dependencies
├── postcss.config.mjs            # PostCSS configuration for TailwindCSS
├── tailwind.config.ts            # TailwindCSS configuration
└── tsconfig.json                 # TypeScript configuration file
```

### Folder Descriptions

- **`drizzle/`**: Contains files related to database migrations and setup for Drizzle ORM.
  - **`meta/`**: Contains SQL migration files (e.g., `0000_daily_stranger.sql`) for initializing the database schema or seeding data.

- **`public/`**: Stores static assets such as SVG files, logos, and other images used by the app.

- **`src/`**: Contains all the source code for the app.
  - **`app/`**: Contains the main app logic, including API routes (`/api/questions/route.ts`), global styles (`globals.css`), layout (`layout.tsx`), and page components (`page.tsx`).
  - **`components/`**: Contains the UI components used by the app, such as the `quiz.tsx` component.
  - **`db/`**: Stores database-related files, including the Drizzle ORM schema (`schema.ts`) and SQL files for inserting data (`insert_questions.sql`).
  - **`hooks/`**: Contains custom React hooks, such as `useQuestions.ts` for managing quiz state and fetching questions.

## Setup and Installation

### Prerequisites

- **Node.js** (v16 or higher)
- **Docker** (if you want to run the database locally)
- **PNPM** (for managing dependencies)

### 1. Clone the repository

```bash
git clone https://github.com/juliawill/quiz-game.git
cd quiz-game
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Set up PostgreSQL Database

If you want to run the database locally using Docker, follow these steps:

1. Start the database container:

```bash
pnpm run postgres:start
```

2. Create and run database migrations:

```bash
pnpm run db:push  # Push the database schema
pnpm run db:generate  # Generate the schema (if needed)
pnpm run db:migrate  # Apply any pending migrations
```

3. Stop the PostgreSQL container when you're done:

```bash
pnpm run postgres:stop
```

### 4. Run the Development Server

You can now run the application in development mode:

```bash
pnpm run dev
```

Visit `http://localhost:3000` in your browser to start playing the quiz!

### 5. Building for Production

To build the application for production, run:

```bash
pnpm run build
pnpm run start
```

This will optimize your app for production and start a production server on `http://localhost:3000`.

## Usage

1. **Answering Questions**: When you start the quiz, the app will display a multiple-choice question. You have a limited amount of time to answer each question.
2. **Scoring**: After submitting an answer, the app checks whether it is correct and updates your score.
3. **Resetting**: Once you've completed all questions or time runs out, you can reset the quiz and start again.

## Environment Variables

Ensure you have a `.env` file in the root of your project to configure environment-specific settings, such as database credentials and other configuration parameters.

Example `.env` file:

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/quiz_game
```

## Development Scripts

- **`pnpm run dev`**: Start the development server.
- **`pnpm run build`**: Build the application for production.
- **`pnpm run start`**: Start the application in production mode.
- **`pnpm run lint`**: Run ESLint to check for code quality.
- **`pnpm run postgres:start`**: Start the PostgreSQL container.
- **`pnpm run postgres:stop`**: Stop the PostgreSQL container.
- **`pnpm run db:push`**: Push the database schema (for Drizzle ORM).
- **`pnpm run db:migrate`**: Run any pending database migrations.

## `layout.tsx` Configuration

The layout of the app is structured in the `layout.tsx` file. It applies global styles, integrates the **Inter** font from Google Fonts, and wraps the entire application in the **AppProviders** component, which provides context for managing React Query.

Here’s the relevant code from `layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { AppProviders } from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Quiz Game",
  description: "A fun and interactive quiz game built with Next.js and React.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
```

## Contributing

Feel free to fork this project and submit pull requests. Contributions are welcome!

1. Fork the repository.
2. Clone your forked repository.
3. Create a new branch (`git checkout -b feature-name`).
4. Make your changes and commit them.
5. Push to your forked repository.
6. Submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).

---
