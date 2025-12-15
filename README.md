# Synurix Website

A modern, production-ready website for Synurix, an AI technology company focused on developing intelligent applications and enterprise systems.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## Features

- Modern dark theme with glassmorphism effects
- Fully responsive design
- Smooth animations and transitions
- Form validation with React Hook Form and Zod
- SEO-friendly metadata
- Production-ready code structure

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── page.tsx              # Home page
│   ├── products/             # Products page
│   ├── enterprise/           # Enterprise Solutions page
│   ├── cooperate/            # Cooperate With Us page
│   ├── submit-project/       # Submit a Project page
│   ├── about/                # About page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Navigation.tsx        # Top navigation
│   ├── Footer.tsx            # Footer component
│   ├── ProductCard.tsx       # Product card component
│   ├── EnterpriseCard.tsx    # Enterprise solution card
│   ├── CooperationForm.tsx   # Cooperation form
│   └── ProjectForm.tsx       # Project submission form
└── public/                   # Static assets
```

## Pages

- **Home**: Hero section with company introduction and core technologies
- **Products**: Showcase of core AI products with expandable details
- **Enterprise Solutions**: Enterprise-focused AI solutions with technical details
- **Cooperate With Us**: Application form for job seekers and collaborators
- **Submit a Project**: Project submission form for companies
- **About**: Company information, mission, vision, and leadership

## Design System

- **Colors**: Dark theme with blue, purple, and pink gradients
- **Typography**: Large, readable fonts with gradient text effects
- **Effects**: Glassmorphism, soft shadows, subtle animations
- **Spacing**: Clean, generous spacing for readability

## License

© 2025 Synurix. All rights reserved.
