# subway web frontend :: based on sveltekit adapter>node & c3labsed over nixpack>>coolify

## autodeployment

Coolify is configured with autodeployment in mind - GitHub App subway-coolify-c3labs-de is configured to monitor commits and initiates redeployment of web-hooked coolify project.


## Adjustments and integrations

added pnpm packages:

- tailwindcss v4.01
- Anta & Titillium Web from @fontssource 
- @sveltejs/enhanced-img 
- @sveltejs/adapter-node has been intergrated and configured
- @svelte-put/dragscroll 4.0.0
- @svelte-put/intersect 4.0.0
- svelte-scrollto-element 3.1.0
- @lucide/svelte
- @arisbh/marqueeck

## sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
