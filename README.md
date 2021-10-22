# Rick and Morty API with GraphQL

## Deployment

- https://fred-rick-and-morty.netlify.app/

## `Stack ` Next.js + Tailwind + Apollo GraphQL

This example shows how to use the above tech stack to fetch and display data from the Rick and Morty API

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

### 3. Start App

```
$ yarn dev
```

## To do

- Write tests for components
- Error handling
- Code refactor
- Fix locations and episodes not fetching more bug

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

|-- .vscode
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
|           |-- characters.jpeg
|           |-- episode.jpeg
|           |-- location.jpeg
|           |-- logo.png
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
    |       |-- index.ts
    |       |-- Characters
    |       |   |-- CharacterProfile.tsx
    |       |   |-- Characters.tsx
    |       |   |-- Favorites.tsx
    |       |   |-- hooks.ts
    |       |   |-- utils.tsx
    |       |   |-- services
    |       |       |-- queries.ts
    |       |-- Episodes
    |       |   |-- Episodes.tsx
    |       |   |-- hooks.ts
    |       |   |-- services
    |       |       |-- queries.ts
    |       |-- Home
    |       |   |-- Home.tsx
    |       |-- Locations
    |       |   |-- Locations.tsx
    |       |   |-- hooks.ts
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
