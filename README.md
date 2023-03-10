# BLINKER - Link saver and blog scraper

This repository contains the source code for the front-end of the Blinker project. It allows you to save links, scrapes blogs for new posts and shortens the links. It is written in TypeScript, using React, Vite, TailwindCSS, react-router and react-query.

- [APP](https://blinker.gm3.tech)
- [API DOCUMENTATION](https://gm3.tech/blinker/api-docs/)
- [BACK-END REPOSITORY](https://github.com/GessioMori/blinker-api)


## DEMO

https://user-images.githubusercontent.com/58918025/219456355-0e1e98bc-241a-45ea-93c6-ad24fb924dae.mp4


## Features

- [x] Styling with TailwindCSS;
- [x] Querying the API with react-query;
- [x] Routing with react-router;
- [x] Form control with react-hook-form;
- [x] Input validation with zod;

## Getting started

### Prerequisites

- Node.js (v16.19.0);
- pnpm (v6.23.0).

### Installation

1. Clone the repository;
2. Install the dependencies with:

```bash
pnpm install
```

3. Start the development server with:

```bash
pnpm dev
```

### Building

1. Clone the repository;
2. Install the dependencies with:

```bash
pnpm install
```

3. Build the project with:

```bash
pnpm build
```

## Environment variables

The following environment variables are required:

- `VITE_API_URL`: the URL of the API;
