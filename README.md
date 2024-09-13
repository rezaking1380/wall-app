# Wall App

A simple web application built using **Next.js** and **TypeScript**, allowing users to create, edit, delete, and reorder sticky notes. Notes persist across sessions using **localStorage**.

## Features

- **Create**: Add new sticky notes with a message and deadline.
- **Edit**: Modify existing notes with updated content or deadline.
- **Delete**: Remove notes when they are no longer needed.
- **Reorder**: Drag and drop notes to rearrange them as needed.
- **Persistence**: Notes are saved in the browser's `localStorage`, so they remain available even after page refresh or browser restart.

## Tech Stack

- **Next.js**: For building the React app with server-side rendering capabilities.
- **TypeScript**: Type-safe JavaScript to ensure reliable and maintainable code.
- **react-beautiful-dnd**: Drag-and-drop functionality to reorder sticky notes.
- **localStorage**: For persisting notes data across browser sessions.

## Installation

To set up and run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rezaking1380/wall-app
   cd wall-app


##  Repository Structure

```sh
└── wall-app/
    ├── README.md
    ├── app
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components
    │   ├── StickyNote.tsx
    │   └── Wall.tsx
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── public
    │   └── fonts
    ├── tailwind.config.ts
    └── tsconfig.json
```

---

##  Modules

<details closed><summary>.</summary>

| File | Summary |
| --- | --- |
| [postcss.config.mjs](https://github.com/rezaking1380/wall-app/blob/main/postcss.config.mjs) | <code>❯ REPLACE-ME</code> |
| [tailwind.config.ts](https://github.com/rezaking1380/wall-app/blob/main/tailwind.config.ts) | <code>❯ REPLACE-ME</code> |
| [tsconfig.json](https://github.com/rezaking1380/wall-app/blob/main/tsconfig.json) | <code>❯ REPLACE-ME</code> |
| [package.json](https://github.com/rezaking1380/wall-app/blob/main/package.json) | <code>❯ REPLACE-ME</code> |
| [next.config.mjs](https://github.com/rezaking1380/wall-app/blob/main/next.config.mjs) | <code>❯ REPLACE-ME</code> |
| [package-lock.json](https://github.com/rezaking1380/wall-app/blob/main/package-lock.json) | <code>❯ REPLACE-ME</code> |

</details>

<details closed><summary>public.fonts</summary>

| File | Summary |
| --- | --- |
| [IRANSansXRegular.ttf](https://github.com/rezaking1380/wall-app/blob/main/public/fonts/IRANSansXRegular.ttf) | <code>❯ REPLACE-ME</code> |

</details>

<details closed><summary>components</summary>

| File | Summary |
| --- | --- |
| [StickyNote.tsx](https://github.com/rezaking1380/wall-app/blob/main/components/StickyNote.tsx) | <code>❯ REPLACE-ME</code> |
| [Wall.tsx](https://github.com/rezaking1380/wall-app/blob/main/components/Wall.tsx) | <code>❯ REPLACE-ME</code> |

</details>

<details closed><summary>app</summary>

| File | Summary |
| --- | --- |
| [globals.css](https://github.com/rezaking1380/wall-app/blob/main/app/globals.css) | <code>❯ REPLACE-ME</code> |
| [page.tsx](https://github.com/rezaking1380/wall-app/blob/main/app/page.tsx) | <code>❯ REPLACE-ME</code> |
| [layout.tsx](https://github.com/rezaking1380/wall-app/blob/main/app/layout.tsx) | <code>❯ REPLACE-ME</code> |

</details>

---

##  Getting Started

###  Prerequisites

**TypeScript**: `version x.y.z`

###  Installation

Build the project from source:

1. Clone the wall-app repository:
```sh
❯ git clone https://github.com/rezaking1380/wall-app
```

2. Navigate to the project directory:
```sh
❯ cd wall-app
```

3. Install the required dependencies:
```sh
❯ npm install
```

###  Usage

To run the project, execute the following command:

```sh
❯ npm run build && node dist/main.js
```

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/rezaking1380/wall-app/issues)**: Submit bugs found or log feature requests for the `wall-app` project.
- **[Submit Pull Requests](https://github.com/rezaking1380/wall-app/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/rezaking1380/wall-app/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/rezaking1380/wall-app
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/rezaking1380/wall-app/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=rezaking1380/wall-app">
   </a>
</p>
</details>

---
