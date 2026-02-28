# 🚀 VC Intelligence Interface  
### Live Venture Capital Discovery + Company Enrichment Engine

![Next.js](https://img.shields.io/badge/Next.js-App_Router-black)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC)
![Deployment](https://img.shields.io/badge/Deployed_on-Vercel-black)
![Status](https://img.shields.io/badge/Status-Production_Ready-success)

A modern venture capital intelligence interface that simulates real-world VC sourcing workflows by combining company discovery with live public website enrichment.

Built with **Next.js App Router, TypeScript, and Tailwind CSS**, this project demonstrates secure server-side data enrichment and a clean SaaS-style UI.

---

## 🔗 Live Demo

**Production App:**  
https://vc-intelligence-intelligence.vercel.app/

**GitHub Repository:**  
https://github.com/SyedHammad-cs/vc-intelligence.git

---

## 🧠 What This Project Demonstrates

This project simulates how venture capital platforms like:

- Harmonic  
- Crunchbase  
- PitchBook  

collect, structure, and enrich company data.

It showcases:

- Full-stack architecture using Next.js App Router
- Secure server-side API routes
- Live enrichment from public websites
- Structured data extraction
- Professional SaaS UI patterns
- Clean code organization and scalability mindset

---

## ✨ Core Features

### 📊 Company Discovery Interface
- Seed dataset of companies
- Responsive card-based layout
- Clean SaaS-style UI
- Navigation to individual company profiles

---

### 🏢 Company Profile Pages
Each company page includes:

- Company name
- Industry
- Website link
- Dedicated enrichment panel

---

### 🔎 Live Website Enrichment (Server-Side)

When a user clicks **"Enrich Company"**:

1. Frontend sends POST request to `/api/enrich`
2. Backend fetches company website HTML
3. Extracts:
   - Meta description (summary)
   - Derived keywords
   - Source URL
   - Enrichment timestamp
4. Returns structured JSON
5. Frontend renders enrichment results

This simulates real VC intelligence sourcing pipelines.

---

### 🔐 Secure Architecture

- Enrichment logic runs exclusively server-side
- No scraping logic exposed to browser
- Clean separation of frontend and backend responsibilities
- Production-safe architecture pattern

---

## 🏗️ Architecture Overview

```
User → Company Page → Enrich Button
        ↓
   POST /api/enrich
        ↓
 Server fetch() → Public Website
        ↓
 Structured Extraction
        ↓
  JSON Response → UI Render
```

---

## 🛠 Tech Stack

### Frontend
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS v4

### Backend
- Next.js API Routes
- Server-side fetch()
- HTML parsing & structured extraction

### Deployment
- Vercel

### Version Control
- Git
- GitHub

---

## 📁 Project Structure

```
app/
 ├── api/
 │    └── enrich/
 │         └── route.ts
 ├── companies/
 │    ├── page.tsx
 │    └── [id]/
 │         └── page.tsx
 ├── layout.tsx
 └── globals.css

components/
 └── EnrichButton.tsx

data/
 └── companies.json

README.md
```

---

## ⚙️ Running Locally

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run production build:

```bash
npm start
```

---

## 🎯 Design Decisions

### Why Next.js App Router?
Integrated frontend + backend support with secure API routes and scalable architecture.

### Why Server-side Enrichment?
Prevents exposing scraping logic and follows production-safe backend patterns.

### Why Tailwind CSS?
Fast iteration, consistent spacing system, scalable UI design.

### Why Seed Data?
Simulates realistic discovery workflows without requiring a database.

---

## 🚀 Future Improvements

- Persistent database (PostgreSQL / Supabase)
- User authentication
- Saved company lists
- Enrichment caching
- AI-powered summarization
- Hiring signals detection
- Search and filtering
- Background job processing

---

## 📌 Assignment Coverage

| Requirement                     | Status      |
|----------------------------------|-------------|
| Companies Interface              | ✅ Complete |
| Company Profiles                 | ✅ Complete |
| Live Enrichment                  | ✅ Complete |
| Server-side API                  | ✅ Complete |
| Secure Architecture              | ✅ Complete |
| Professional UI                  | ✅ Complete |
| Deployment                       | ✅ Complete |

---

## 👨‍💻 Author

**Syed Hammad Ali**

---

## 📄 License

This project is created for educational and demonstration purposes.

---