## Usage

After cloning, run:

```bash
npm install
npm run dev
```

## Technologies

- react: ^18.2.0
- react-router-dom: ^6.16.0
- react-hook-form: ^7.46.1
- reduxjs/toolkit: ^1.9.5
- chakra-ui/react: ^2.8.1
- typescript: ^5.2.2
- vite: ^4.4.5

## Conventions

- Use PascalCase for naming components and camelCase for variables and functions
- Create a folder for each component and use index.tsx for the file itself
- Use arrow functions for creating components
- Do not use inline typing

## Contribution

- Use [conventional commits](https://daily-dev-tips.com/posts/git-basics-conventional-commits/) for your changes.
- Create branches for each change in the following format <category/description-in-kebab-case> e.g.

```bash
git branch feature/button-component
git branch fix/background-img-not-in-position
git branch refactor/extract-component
git branch style/color-picker
```
