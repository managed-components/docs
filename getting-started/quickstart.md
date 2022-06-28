---
sidebar_position: 1
---

# Quickstart

## 🐣 Write your Managed Component

1. Scaffold a new managed component project by running
   ```bash
   npm init managed-component
   ```
   Following the commandline setup wizard will result in a new folder in your current directory that contains a few key ingredients to get started writing your new managed component. It's pre-configured with:
     - [Typescript](https://www.typescriptlang.org/)
     - [Vitest](https://vitest.dev)
     - [ESlint](https://eslint.org/)
     - [Prettier](https://prettier.io/)
2. Add the content of your managed-component within the `src/index.ts` file of your newly created project.
    ```js
    export default async function (manager, settings) {
      // the Managed Component logic goes here
    }
    ```
3. Build your component with
   ```bash
   npm run build
   ```

## 🧪 Test your Managed Component

Test your component with a [Component Manager](/getting-started/components-manager), such as the [open-source WebCM](https://webcm.dev/).

## 💌 Share your Managed Component

Let the community know about your managed component by [making a PR to these docs](https://github.com/managed-components/docs) so it can be shared in the [Known Components](/components) list.