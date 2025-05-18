# LiteStack

A lightweight, modern toolchain for building static websites without the complexity of SPAs or heavy JavaScript frameworks. LiteStack combines the best minimal tools - Vite, Handlebars, Alpine.js, and TailwindCSS v4 - to generate clean HTML, CSS, and JavaScript that can easily integrate with any backend system.

## Features

- 📦 **Minimal Dependencies** - No huge frameworks, just what you need
- 🚀 **Fast Development** - Powered by Vite for lightning-fast builds
- 🧩 **Component-Based** - Handlebars for templating and component composition
- 🎨 **TailwindCSS v4** - Latest version with simplified configuration in CSS
- ⚡ **Alpine.js** - Lightweight JavaScript for interactive functionality
- 🌙 **Dark Mode** - Built-in dark mode with system preference detection
- 📱 **Responsive** - Mobile-friendly layouts out of the box
- 🔍 **TypeScript Support** - Type checking for better code quality

## Getting Started

### Prerequisites

- Node.js (>= 18.0.0)
- pnpm (recommended) or npm

### Installation

1. Clone this repository
```bash
git clone https://github.com/hamedniroomand/lite-stack
cd lite-stack
```

2. Install dependencies
```bash
pnpm install
```

3. Start the development server
```bash
pnpm dev
```

4. Visit `http://localhost:5174` in your browser

### Build for Production

```bash
pnpm build
```

The build output will be in the `dist` directory - ready to be deployed to any static hosting service or integrated with your backend application.

## Project Structure

```
├── public/                 # Static assets that will be copied to dist
│   └── statics/            # Images, fonts, etc.
├── src/
│   ├── assets/             # CSS and TypeScript files
│   │   ├── css/            # CSS files with TailwindCSS v4 configuration
│   │   └── ts/             # TypeScript files for Alpine.js
│   ├── components/         # Reusable Handlebars components
│   ├── data/               # JSON data files for templates
│   ├── layouts/            # Layout templates
│   └── pages/              # Page templates
├── .gitignore              # Git ignore file
├── eslint.config.js        # ESLint configuration (flat config)
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.js          # Vite configuration with plugins
```

## How It Works

### Templates and Components

This project uses Handlebars for templating. Layouts are in `src/layouts`, and pages are in `src/pages`. Reusable components can be created in `src/components`.

Example of using a component:

```handlebars
{{#> "layouts/default.hbs" title="Home"}}
  <section>
    {{> button id="my-button"}}
      Click Me
    {{/button}}
  </section>
{{/layouts/default.hbs}}
```

### Data Binding

This project offers a flexible data binding system:

1. **Global Data**: The `src/data/main.json` file contains data that's available to all Handlebars templates throughout the project. This is perfect for site-wide information like navigation, company details, or global settings.

2. **Page-Specific Data**: Each page template can have its own corresponding JSON file with the same name. For example, `src/pages/index.hbs` can be populated with data from `src/pages/index.hbs.json`. This data is only available to that specific page.

3. **Component-Specific Data**: Similarly, individual components can have their own JSON files following the same pattern.

This allows for a clean separation of data and presentation logic across your project.

### TailwindCSS v4 Integration

LiteStack uses TailwindCSS v4 with its simplified configuration approach directly in CSS:

```css
@import "tailwindcss";
```

### Dark Mode

Dark mode is implemented using CSS and Alpine.js, with automatic detection of system preferences and persistent preferences via localStorage:

```html
<button x-data="{}" @click="$dispatch('toggle-theme')">
  Toggle Dark Mode
</button>
```

### Interactive Functionality

For dynamic features, this starter includes Alpine.js, a minimal framework for adding JavaScript behavior:

```html
<div x-data="{ open: false }">
  <button @click="open = !open">Toggle</button>
  <div x-show="open">Content</div>
</div>
```

## Deployment

### GitHub Pages

The project includes a GitHub Actions workflow that automatically builds and deploys your site to GitHub Pages when you push to the main branch.

### Other Hosting Options

The build output in the `dist` directory can be deployed to any static hosting service or integrated with backend systems.

## Integration with Backend Systems

The build process generates static HTML, CSS, and JS files that can be integrated with any backend system:

1. Build the project using `pnpm build`
2. Take the generated files from the `dist` directory
3. Integrate with your backend framework (PHP, Node.js, Django, Rails, etc.)

For server-side rendering, you can:
- Use the static HTML as templates in your backend
- Load the CSS and JS files as assets
- Replace dynamic content markers with server-generated data

## License

MIT

## Acknowledgements

- [Vite](https://vitejs.dev/)
- [Handlebars](https://handlebarsjs.com/)
- [Alpine.js](https://alpinejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)