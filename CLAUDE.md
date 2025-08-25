# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server (http://localhost:3001)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint (currently not configured)

## Project Overview

This is a **single-page landing site** for "Automaticamente", a company specializing in n8n automation services for businesses. Built with **Next.js 15**, **React 19**, and **Bootstrap 5**.

**Business Focus**: Eliminating bottlenecks and automating business processes using n8n workflow automation platform.

## Architecture

### Simplified Structure
This project has been streamlined from a multi-layout template to a focused single-page application:

- **Root page** (`/`) - Main landing page showcasing automation services
- **Spanish language** - All content optimized for Spanish-speaking business market
- **Conversion-focused** - Designed for lead generation and service sales

### Key Directories

- `src/app/(MainBody)/page.jsx` - **Main landing page** (root route)
- `src/containers/layouts/sections/automaticamente/` - **Landing page sections**:
  - `banner.js` - Hero section with value proposition
  - `feature.js` - 6 key automation benefits
  - `build.js` - 3-slide capabilities showcase
  - `work.js` - 4-step process (Análisis → Diseño → Implementación → Optimización)
  - `price.js` - 3-tier pricing (Consultoría, Starter, Enterprise)
  - `testimonial.js` - Client testimonials with video
  - `subscribe.js` - Contact/lead capture form
  - `faq.js` - Common automation questions
  - `client.js` - Integration logos slider
  - `footer.js` & `copyright.js` - Footer sections

- `src/database/layouts/automaticamente/database.js` - **Content data** for components
- `src/constant/menu.js` - **Navigation menu** with anchor links to sections
- `src/containers/common/header.js` - **Simple header** with Spanish navigation

### Navigation Structure

Single-page navigation with smooth scrolling to sections:
- Inicio (/)
- Servicios (#feature)
- Proceso (#proceso)
- Precios (#precios)
- Testimonios (#testimonios)
- FAQ (#faq)
- Contacto (#contacto)

### Content & Copy

**Target Market**: Spanish-speaking businesses looking to automate processes
**Value Propositions**:
- Save 40 hours weekly through automation
- n8n open-source platform (no vendor lock-in)
- 300+ app integrations
- Expert consultation and implementation

**Pricing Strategy**:
- Free consultation to reduce friction
- Starter plan: $1,500/month (up to 5 automations)
- Enterprise: $5,000/month (unlimited)

### Styling

- **Bootstrap 5** with custom SCSS
- **Blue color scheme** (#2563eb) representing trust/technology
- **Responsive design** optimized for mobile and desktop
- **Interactive elements**: sliders, accordions, video modals

### Technical Features

- **Static generation** - Fast loading, SEO optimized
- **Client-side components** - Interactive features with react-slick, reactstrap
- **Path aliases** - `@/*` maps to `src/*`
- **NoSsr wrapper** - Handles SSR issues with interactive components

### Deployment

Optimized for production deployment:
- Clean build process (`npm run build`)
- Static asset optimization
- Environment configuration support
- Ready for Vercel, Netlify, or similar platforms

## Content Updates

When updating content:
1. **Text/Copy**: Modify `src/database/layouts/automaticamente/database.js`
2. **Navigation**: Update `src/constant/menu.js`
3. **Pricing**: Edit pricing data in `src/containers/layouts/sections/automaticamente/price.js`
4. **Contact Info**: Update footer and contact sections accordingly