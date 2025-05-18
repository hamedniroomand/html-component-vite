# HTML Component Vite

A simple, lightweight boilerplate for building static HTML sites without the complexity of SPAs or heavy JavaScript frameworks. Built with Vite, Handlebars, Alpine.js, and TailwindCSS, this starter generates clean HTML, CSS, and JavaScript files that can easily integrate with any backend system.

## Features

- 📦 **Minimal Dependencies** - No huge frameworks, just what you need
- 🚀 **Fast Development** - Powered by Vite for lightning-fast builds
- 🧩 **Component-Based** - Handlebars for templating and component composition
- 🎨 **TailwindCSS** - Utility-first CSS framework for rapid styling
- ⚡ **Alpine.js** - Lightweight JavaScript for interactive functionality
- 📱 **Responsive** - Mobile-friendly layouts out of the box
- 🔍 **TypeScript Support** - Type checking for better code quality

## Getting Started

### Prerequisites

- Node.js (>= 18.0.0)
- pnpm, npm, or yarn

### Installation

1. Clone this repository
```bash
git clone https://github.com/hamedniroomand/html-component-vite
cd html-component-vite
```

2. Install dependencies
```bash
pnpm install
```

3. Start the development server
```bash
pnpm dev
```

4. Visit `http://localhost:5173` in your browser

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
│   │   ├── css/            # CSS files (TailwindCSS)
│   │   └── ts/             # TypeScript files (Alpine.js)
│   ├── components/         # Reusable Handlebars components
│   ├── data/               # JSON data files for templates
│   ├── layouts/            # Layout templates
│   └── pages/              # Page templates
├── .gitignore              # Git ignore file
├── eslint.config.js        # ESLint configuration
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.js          # Vite configuration
```

## How It Works

### Templates and Components

This starter uses Handlebars for templating. Layouts are in `src/layouts`, and pages are in `src/pages`. Reusable components can be created in `src/components`.

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

This allows for a clean separation of data and presentation logic across your project. You can access the data in your templates using standard Handlebars syntax:

```handlebars
<h1>{{ main_heading }}</h1>
<nav>
  {{#each navigation as |item|}}
    <a href="/{{item}}">{{item}}</a>
  {{/each}}
</nav>
```

### Interactive Functionality

For dynamic features, this starter includes Alpine.js, a minimal framework for adding JavaScript behavior to your markup:

```html
<div x-data="{ open: false }">
  <button @click="open = !open">Toggle</button>
  <div x-show="open">Content</div>
</div>
```

## Customization

### Adding New Pages

Create a new `.hbs` file in the `src/pages` directory. Use the default layout or create a custom one:

```handlebars
{{#> "layouts/default.hbs" title="New Page"}}
  <h1>My New Page</h1>
  <p>This is a new page.</p>
{{/layouts/default.hbs}}
```

### Styling

This starter uses TailwindCSS for styling. The main CSS file is at `src/assets/css/style.css`, which imports TailwindCSS.

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