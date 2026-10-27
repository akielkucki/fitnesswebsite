# Fitness Website

A fitness-focused frontend project built with **Svelte 5**, **TypeScript**, **Tailwind CSS**, and **Vite**.

This repository is part of my web development portfolio, reflecting my work with reactive interfaces, component-driven development, and modern frontend tooling.

## Tech stack

- **Svelte 5** — reactive UI framework
- **TypeScript** — typed application code
- **Tailwind CSS 4** — utility-first styling
- **Vite** — development server and production builds
- **Cloudflare Workers / Wrangler** — deployment tooling configured in the project

## What this project demonstrates

- Building web interfaces using Svelte and TypeScript
- Structuring a frontend project with modern JavaScript tooling
- Working with Tailwind CSS for application styling
- Configuring type-checking, builds, and deployment scripts

## Getting started

### Prerequisites

- Node.js and npm

### Install and run

```bash
git clone https://github.com/akielkucki/fitnesswebsite.git
cd fitnesswebsite
npm install
npm run dev
```

Open the local URL printed by Vite.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run check` | Run Svelte and TypeScript checks |
| `npm run build` | Build for production |
| `npm run preview` | Build and run a local Wrangler preview |
| `npm run deploy` | Build and deploy through Wrangler |

> Cloudflare commands may require appropriate local credentials and configuration.

## Repository structure

```text
public/             Static assets
src/                Application source code
svelte.config.js    Svelte configuration
vite.config.ts      Vite configuration
wrangler.jsonc      Cloudflare deployment configuration
```

## Project status

Portfolio / development project. See the source code for the current implementation; this README intentionally does not claim features that have not been verified in the repository.

## Author

**Alex** — [GitHub](https://github.com/akielkucki)
