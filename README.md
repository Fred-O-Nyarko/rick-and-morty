# Rick and Morty API with GraphQL

## `Stack ` Next.js + Tailwind + Apollo GraphQL

This example shows how to uses the above tech stack to fetch and display data from the Rick and Morty API

It also uses the new [`Just-in-Time Mode`](https://tailwindcss.com/docs/just-in-time-mode) for Tailwind CSS.

## A few things to note in the project:

## Installation

#### 1. Clone this repo

```
$ git git@github.com:FreeHill/rick-and-morty
$ cd rick-and-morty
```

#### 2. Install dependencies

```
$ yarn install
```

if you encounter errors with the node engine

```
$ yarn --ignore-engines
```

## To do

- Write tests for components
- Error handling
- Code refactor

## Contribution

### Git Workflow

- Contribution to this project must follow the
  **[GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=Gitflow%20is%20a%20legacy%20Git,software%20development%20and%20DevOps%20practices.)**
  workflow

### Commits

- Commits messages must follow **[Conventional Commits Spec](https://www.conventionalcommits.org/en/v1.0.0/)**

- Use `yarn commit` to commit messages

## Directory Structure

```
    |-- .DS_Store
    |-- .eslintignore
    |-- .eslintrc.js
    |-- .gitignore
    |-- .lintstagedrc
    |-- .prettierignore
    |-- .prettierrc
    |-- README.md
    |-- codegen.yml
    |-- commitlint.config.js
    |-- declarations.d.ts
    |-- next-env.d.ts
    |-- next.config.js
    |-- package.json
    |-- postcss.config.js
    |-- tailwind.config.js
    |-- tsconfig.json
    |-- yarn-error.log
    |-- yarn.lock
    |-- .husky
    |   |-- commit-msg
    |   |-- pre-commit
    |   |-- _
    |       |-- .gitignore
    |       |-- husky.sh
      |   |-- settings.json
    |-- public
    |   |-- .DS_Store
    |   |-- favicon.ico
    |   |-- vercel.svg
    |   |-- assets
    |       |-- .DS_Store
    |       |-- images
    |           |-- bg-noise.png
    |           |-- bg_2.jpeg
    |           |-- bg_dark.jpeg
    |           |-- bg_grey.png
    |           |-- bg_red.jpeg
    |           |-- characters.jpeg
    |           |-- episode.jpeg
    |           |-- location.jpeg
    |           |-- logo.png
    |           |-- rick_morty_bg.png
    |-- src
        |-- api
        |   |-- hello.tsx
        |-- components
        |   |-- index.ts
        |   |-- elements
        |   |   |-- Footer.tsx
        |   |   |-- Header.tsx
        |   |   |-- Image.tsx
        |   |   |-- Link.tsx
        |   |   |-- LoadingIndicator.tsx
        |   |   |-- Notification.tsx
        |   |   |-- PageLoader.tsx
        |   |   |-- ScrollTop.tsx
        |   |   |-- index.ts
        |   |-- modules
        |       |-- Home.tsx
        |       |-- Characters
        |       |   |-- CharacterProfile.tsx
        |       |   |-- Characters.tsx
        |       |   |-- Favorites.tsx
        |       |   |-- utils.tsx
        |       |   |-- services
        |       |       |-- queries.ts
        |       |-- Episodes
        |       |   |-- Episodes.tsx
        |       |   |-- services
        |       |       |-- queries.ts
        |       |-- Home
        |       |-- Locations
        |       |   |-- Locations.tsx
        |       |   |-- services
        |       |       |-- queries.ts
        |       |-- layout
        |           |-- AppLayout.tsx
        |-- configs
        |   |-- apolloClient.ts
        |   |-- index.ts
        |-- generated
        |   |-- graphql.schema.json
        |   |-- graphql.ts
        |-- pages
        |   |-- _app.tsx
        |   |-- _document.tsx
        |   |-- index.tsx
        |   |-- characters
        |   |   |-- [id].tsx
        |   |   |-- favorites.tsx
        |   |   |-- index.tsx
        |   |-- episodes
        |   |   |-- index.tsx
        |   |-- locations
        |       |-- index.tsx
        |-- redux
        |   |-- characterSlice.ts
        |   |-- hooks.ts
        |   |-- index.ts
        |   |-- store.ts
        |-- routing
        |   |-- routes.ts
        |-- shared
        |   |-- constants.ts
        |   |-- index.ts
        |-- styles
            |-- global.css

```
