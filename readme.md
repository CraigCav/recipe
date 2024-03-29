<br>

<p align="center">
  <a href="https://ezcater.github.io/recipe/">
    <img src="https://user-images.githubusercontent.com/109814/82938935-8e390600-9f60-11ea-8526-c5c8471d642e.png" alt="Recipe logo" />
  </a>
</p>

<p align="center">
  Delicious UI components, from <a href="https://www.ezcater.com/">ezcater</a>.
  <br>
  <a href="https://ezcater.github.io/recipe/"><strong>Explore website »</strong></a>
</p>

<br>

<p align="center">
  <a href="https://npmjs.org/package/@ezcater/recipe"><img alt="NPM version" src="https://img.shields.io/npm/v/@ezcater/recipe.svg" /></a>
  <a href="https://npmjs.org/package/@ezcater/recipe"><img alt="NPM version" src="https://img.shields.io/bundlephobia/minzip/@ezcater/recipe" /></a>
  <a href="https://npmjs.org/package/@ezcater/recipe"><img alt="NPM downloads" src="https://img.shields.io/npm/dm/@ezcater/recipe.svg"></a>
  <a href="https://codeclimate.com/repos/5c12979fd73e384386005c4c/maintainability"><img src="https://api.codeclimate.com/v1/badges/2497a885426f04568739/maintainability" /></a>
  <a href="https://codeclimate.com/repos/5c12979fd73e384386005c4c/test_coverage"><img src="https://api.codeclimate.com/v1/badges/2497a885426f04568739/test_coverage" /></a>
</p>

# Installation

```
npm install @ezcater/recipe --save
```

## Importing components in downstream projects

Import the Recipe package, just as you would any other package dependency:

```js
import {EzButton} from '@ezcater/recipe';

export const MyComponent = () => (
  <div>
    <EzButton use="primary" onClick={() => alert('You clicked me!')}>
      Click Me!
    </EzButton>
  </div>
);
```

## Contributing / Creating Components

This project uses [plop](https://www.npmjs.com/package/plop) to generate new React components. The functionality is exposed as the `create-component` npm script from package.json. This will:

- copy the component template files from `templates/component` to `src/components/YOUR_COMPONENT_NAME`,
- rename all files to match your component's name
- replace all occurrences of `Component` inside the component's files with your component's name.

To create a new component, run `npm run create-component` inside the project. You'll see a CLI that guides you through the process.

After the CLI has finished, all files will have been created in the location you specified. You'll need to add an export for your component to `src/index.tsx`. For example:

```tsx
// inside src/index.tsx
export {default as EzButton} from './components/EzButton';
```

## Developing

Use the `npm start` command when making edits to `recipe` to accomplish the following:

- Run `npm run build:watch`; this will recompile any changes made to `recipe` components
- Automatically link the local recipe directory to the documentation site
- Run `gatsby develop`; this will start up the documentation website and recompile when there are changes to either the `recipe` or documentation codebase

## Publishing

After contributing updates to recipe, you'll need to publish the recipe package for changes to take effect in downstream projects.

Recipe uses the [Changesets Release github action](https://github.com/changesets/action) to automate the process of creating a pull request for an up-versioned Recipe release. This process uses the [semantic versioning metadata](#following-semantic-versioning) captured as part of our development process. When an automated versioning PR is merged, a new Recipe release will be published to npm on your behalf.

## License

Recipe is licensed under the MIT license.
