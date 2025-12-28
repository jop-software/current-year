<div align="center">
    <h1>@jop-software/current-year</h1>
</div>

A simple web component that displays the current year.

## Installation

You can install the package via npm (or compatible package managers):

```bash
npm install @jop-software/current-year
```

Or include it directly in your HTML via a CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@jop-software/current-year/dist/current-year.js"></script>
```

## Usage

When using a build system like Vite or tools like Astro, you need do import the package as follows:

```javascript
import "@jop-software/current-year";
```

After that or when using the CDN version, the `<current-year>` web component will be available for use in your HTML and can be used like this:

```html
<footer>
  <p>&copy; <current-year></current-year></p>
</footer>
```

## Development

To build the project locally, clone the repository and run:

```bash
pnpm install
pnpm build
```

### Publish to npm

```bash
pnpm publish --access public
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

<div align="center">
    <sub>Created by <a href="https://jop-software.de">jop-software Inh. Johannes Przymusinski</a></sub>
</div>
