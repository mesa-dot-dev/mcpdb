## Getting Started

Install dependencies

```bash
pnpm i
```

Startup Supabase

```bash
pnpm supabase start
```

Create .env file with url of local database

```
DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:54322/postgres
```

Apply latest migrations to local db

```bash
pnpm run db:push
```

Run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
