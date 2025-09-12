# Vaishno Crop Science - Agricultural Solutions Website

## Overview

This is a full-stack web application for Vaishno Crop Science, an agricultural solutions company. The project is built as a modern React single-page application with an Express.js backend, featuring a professional corporate website with product showcases, contact forms, and responsive design optimized for agricultural businesses.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom agricultural theme colors (green-focused palette)
- **State Management**: TanStack React Query for server state and data fetching
- **Forms**: React Hook Form with Zod validation schemas
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture  
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: TSX for TypeScript execution in development
- **Production**: ESBuild for bundling the server code
- **Storage Interface**: Abstracted storage layer with in-memory implementation (ready for database integration)

### Component Architecture
- **Design System**: Professional agricultural branding with custom VCS logo component
- **Layout**: Fixed navigation header, main content area, and footer structure
- **Pages**: Home (hero section), About, Products, Resources, Contact with placeholder content
- **Interactive Elements**: Floating contact button, responsive navigation, toast notifications

### Database Schema
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: Neon Database (serverless PostgreSQL) 
- **Schema**: User management system with username/password authentication
- **Migrations**: Drizzle Kit for schema management and migrations

### Development Environment
- **Hot Reload**: Vite HMR for instant frontend updates
- **Development Tools**: Replit-specific plugins for error overlay and development banner
- **Path Aliases**: Organized imports with @ for client src, @shared for shared code
- **Type Safety**: Strict TypeScript configuration across frontend and backend

### Styling System
- **Theme**: Custom agricultural color palette (primary green: hsl(120, 60%, 45%))
- **Typography**: Inter for body text, Playfair Display for headings
- **Responsive**: Mobile-first design with Bootstrap integration for grid system
- **Icons**: Font Awesome for consistent iconography throughout the site
- **CSS Variables**: Shadcn theming system with light/dark mode support

## External Dependencies

### Core Frontend Libraries
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **UI Framework**: Radix UI components, Shadcn/ui, Class Variance Authority
- **Styling**: Tailwind CSS, Clsx, PostCSS, Autoprefixer
- **State Management**: TanStack React Query for API state
- **Forms**: React Hook Form, Hookform Resolvers for validation

### Backend Dependencies  
- **Server**: Express.js for HTTP server and API routing
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: TSX for TypeScript execution, ESBuild for production bundling

### External Services
- **Database**: Neon Database (serverless PostgreSQL hosting)
- **CDN Assets**: Google Fonts (Inter, Playfair Display), Font Awesome icons
- **CSS Framework**: Bootstrap 5.3 via CDN for additional styling utilities

### Development Tools
- **Build System**: Vite with React plugin and TypeScript support
- **Code Quality**: TypeScript strict mode, ESLint configuration
- **Development Experience**: Replit-specific development plugins and error handling
- **Database Management**: Drizzle Kit for schema migrations and database operations