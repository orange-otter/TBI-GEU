# 🌲 Trishul Eco-Homestays Review Classifier & Dashboard

A professional dashboard and AI-powered sentiment classifier built specifically for analyzing guest feedback at eco-homestays. This application extracts key insights from guest reviews, categorizes them by theme, performs sentiment analysis, and automatically generates personalized, professional responses using Gemini 2.5 Flash.

![Aesthetic Dashboard Preview](https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&w=1200&q=80)

---

## ✨ Features

- **AI-Powered Review Analysis**: Leverage the Gemini 2.5 Flash API to classify sentiments (Positive, Neutral, Negative) and themes (Food, Host, Location, Cleanliness, Value, Experience).
- **Personalized Suggested Responses**: Automatically generates contextual draft responses to guest feedback, avoiding generic copy-paste text.
- **KPI Metrics Dashboard**: High-level statistical cards summarizing reviews count by sentiment.
- **Bulk CSV Upload/Export**: Effortlessly import or export reviews in CSV formats.
- **Interactive Review Editor**: Edit analyzed reviews, customize the AI responses, or delete them directly in the UI.
- **Secure Persistence**: Powered by Supabase Postgres database backend with Row-Level Security (RLS) policies.

---

## 🛠️ Technology Stack

- **Frontend**: React (v19), TypeScript, Vite, Tailwind CSS, Radix UI Premier components (via Shadcn UI), Framer Motion, Recharts.
- **Backend / API**: Node.js Express server + tRPC (TypeScript-first RPC framework) for secure, type-safe API communication.
- **Database**: Supabase Postgres Client with Row-Level Security.
- **AI Integration**: Official Google Gen AI SDK (`@google/genai`) using the modern `gemini-2.5-flash` model.

---

## ⚙️ Environment Configuration

To run the application locally, you must configure your environment variables. Rename `.env.local.example` or create a new `.env.local` (already ignored by Git) in the root of the project:

```env
# Gemini AI Key
GEMINI_API_KEY=your_gemini_api_key_here

# Supabase Configurations
SUPABASE_URL=your_supabase_url_here
SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here
```

### Database Schema Setup
Run the SQL migration script located in [supabase_migration.sql](file:///c:/Users/acer/Downloads/trishul-eco-homestays-classifier-main/supabase_migration.sql) inside the Supabase SQL editor to set up the necessary tables:
- **`users`**: Linked to Supabase Auth users.
- **`reviews`**: Holds review texts, classified sentiment, themes, and suggested responses.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- `npm` (or `pnpm` if globally configured)

### Installation

Install the project dependencies using `npm`:

```bash
npm install --legacy-peer-deps
```

> [!NOTE]
> The `--legacy-peer-deps` flag is recommended to bypass peer dependency conflicts with newer Vite plugin versions.

### Running the App

1. **Development Mode**:
   Start both frontend and backend development servers simultaneously:
   ```bash
   npm run dev
   ```
   Open your browser to `http://localhost:5173`.

2. **Build for Production**:
   Compile the client bundles and server scripts:
   ```bash
   npm run build
   ```

3. **Start Production Server**:
   ```bash
   npm run start
   ```

4. **Run Unit Tests**:
   Run Vitest suite:
   ```bash
   npm run test
   ```

---

## 📂 Project Structure

```
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components & dialogs
│   │   ├── pages/          # Home dashboard and error pages
│   │   └── main.tsx        # App entrypoint
├── server/                 # Express backend application
│   ├── _core/              # Vite SSR and tRPC middleware wrappers
│   ├── routers/            # tRPC api routes (review analysis endpoints)
│   ├── db.ts               # Supabase database operations
│   └── supabase.ts         # Supabase client setup
├── shared/                 # Shared types & schemas
└── supabase_migration.sql  # SQL schema migrations
```

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).
