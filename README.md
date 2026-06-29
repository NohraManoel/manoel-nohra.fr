# Portfolio - Manoël Nohra

This repository houses the personal game portfolio and professional resume website of **Manoël Nohra**, a Gameplay Programmer and Software Engineer.

The site is built with **Astro v6** and tailored with premium styling, custom animations, and automated translations.

## 🚀 Getting Started

To run the project locally, install the dependencies and run the Astro dev server:

```bash
# Install dependencies
npm install

# Start the dev server locally
npm run dev

# Build the production static bundle
npm run build
```

---

## 📂 Project Architecture & Custom Setup

The project is structured to enforce the **DRY (Don't Repeat Yourself)** principle and optimize performance:

```
├── src/
│   ├── assets/          # Static layout assets
│   ├── components/      # Reusable Astro elements
│   │   ├── GameCard.astro      # Interactive card with global carousel scripts & dots navigation
│   │   ├── HomeContent.astro   # Main layout content & custom contact inline SVG icons
│   │   ├── ResumeContent.astro # Structured timeline display
│   │   └── Navigation.astro    # Site header with language switcher (en / fr)
│   ├── data/            # Localized data stores
│   │   ├── projects.ts         # Portfolio projects lists (EN/FR)
│   │   ├── resume.ts           # Career/educational timelines (EN/FR)
│   │   └── translations.ts     # UI and detail text translations
│   ├── layouts/         # Templates
│   │   └── BaseLayout.astro    # Core HTML shell (SEO, Open Graph, and Twitter metadata)
│   ├── pages/           # File-based routing
│   │   ├── index.astro         # EN landing page
│   │   ├── parcours.astro      # EN resume page
│   │   └── fr/
│   │       ├── index.astro     # FR landing page
│   │       └── parcours.astro  # FR resume page
│   └── utils/           # Helper scripts
│       └── date.ts             # Dynamic birthdate-to-age calculator
```

### 🌐 Dynamic Localization (EN & FR)
Instead of replicating HTML structure and styles across the English and French routing files, both routes load the same **`HomeContent.astro`** and **`ResumeContent.astro`** components, feeding them the current locale. Page-specific copy is loaded from data arrays in the **`src/data/`** directory.

### 📈 SEO & Open Graph
Every layout page is configured to dynamically accept custom `description` text. Inside **`BaseLayout.astro`**, standard SEO titles, metadata descriptions, Open Graph parameters (`og:*`), and Twitter cards (`twitter:*`) are automatically generated for social media link sharing.

### 📅 Automatic Age Calculator
The age shown in the details list is dynamically calculated relative to the developer's birthdate (`REDACTED`) using the utility function in [`src/utils/date.ts`](file:///c:/Users/manoe/Desktop/Bordel/manoel-nohra.fr/src/utils/date.ts).