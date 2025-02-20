export const THEMES = [
  { text: "Andromeeda", value: "andromeeda" },
  { text: "Aurora X", value: "aurora-x" },
  { text: "Ayu Dark", value: "ayu-dark" },
  { text: "Catppuccin Frappé", value: "catppuccin-frappe" },
  { text: "Catppuccin Latte", value: "catppuccin-latte" },
  { text: "Catppuccin Macchiato", value: "catppuccin-macchiato" },
  { text: "Catppuccin Mocha", value: "catppuccin-mocha" },
  { text: "Dark Plus", value: "dark-plus" },
  { text: "Dracula Theme", value: "dracula" },
  { text: "Dracula Theme Soft", value: "dracula-soft" },
  { text: "Everforest Dark", value: "everforest-dark" },
  { text: "Everforest Light", value: "everforest-light" },
  { text: "GitHub Dark", value: "github-dark" },
  { text: "GitHub Dark Default", value: "github-dark-default" },
  { text: "GitHub Dark Dimmed", value: "github-dark-dimmed" },
  { text: "GitHub Dark High Contrast", value: "github-dark-high-contrast" },
  { text: "GitHub Light", value: "github-light" },
  { text: "GitHub Light Default", value: "github-light-default" },
  { text: "GitHub Light High Contrast", value: "github-light-high-contrast" },
  { text: "Houston", value: "houston" },
  { text: "Kanagawa Dragon", value: "kanagawa-dragon" },
  { text: "Kanagawa Lotus", value: "kanagawa-lotus" },
  { text: "Kanagawa Wave", value: "kanagawa-wave" },
  { text: "LaserWave", value: "laserwave" },
  { text: "Light Plus", value: "light-plus" },
  { text: "Material Theme", value: "material-theme" },
  { text: "Material Theme Darker", value: "material-theme-darker" },
  { text: "Material Theme Lighter", value: "material-theme-lighter" },
  { text: "Material Theme Ocean", value: "material-theme-ocean" },
  { text: "Material Theme Palenight", value: "material-theme-palenight" },
  { text: "Min Dark", value: "min-dark" },
  { text: "Min Light", value: "min-light" },
  { text: "Monokai", value: "monokai" },
  { text: "Night Owl", value: "night-owl" },
  { text: "Nord", value: "nord" },
  { text: "One Dark Pro", value: "one-dark-pro" },
  { text: "One Light", value: "one-light" },
  { text: "Plastic", value: "plastic" },
  { text: "Poimandres", value: "poimandres" },
  { text: "Red", value: "red" },
  { text: "Rosé Pine", value: "rose-pine" },
  { text: "Rosé Pine Dawn", value: "rose-pine-dawn" },
  { text: "Rosé Pine Moon", value: "rose-pine-moon" },
  { text: "Slack Dark", value: "slack-dark" },
  { text: "Slack Ochin", value: "slack-ochin" },
  { text: "Snazzy Light", value: "snazzy-light" },
  { text: "Solarized Dark", value: "solarized-dark" },
  { text: "Solarized Light", value: "solarized-light" },
  { text: "Synthwave '84", value: "synthwave-84" },
  { text: "Tokyo Night", value: "tokyo-night" },
  { text: "Vesper", value: "vesper" },
  { text: "Vitesse Black", value: "vitesse-black" },
  { text: "Vitesse Dark", value: "vitesse-dark" },
  { text: "Vitesse Light", value: "vitesse-light" },
];

export const LANGUAGES = [
  { text: "Angular HTML", value: "angular-html" },
  { text: "Angular TypeScript", value: "angular-ts" },
  { text: "Astro", value: "astro" },
  { text: "Blade", value: "blade" },
  { text: "C", value: "c" },
  { text: "CoffeeScript", value: "coffee" },
  { text: "C++", value: "cpp" },
  { text: "CSS", value: "css" },
  { text: "GLSL", value: "glsl" },
  { text: "GraphQL", value: "graphql" },
  { text: "Ruby Haml", value: "haml" },
  { text: "Handlebars", value: "handlebars" },
  { text: "HTML", value: "html" },
  { text: "HTML (Derivative)", value: "html-derivative" },
  { text: "HTTP", value: "http" },
  { text: "Imba", value: "imba" },
  { text: "Java", value: "java" },
  { text: "JavaScript", value: "javascript" },
  { text: "Jinja", value: "jinja" },
  { text: "Jison", value: "jison" },
  { text: "JSON", value: "json" },
  { text: "JSON5", value: "json5" },
  { text: "JSON with Comments", value: "jsonc" },
  { text: "JSON Lines", value: "jsonl" },
  { text: "JSX", value: "jsx" },
  { text: "Julia", value: "julia" },
  { text: "Less", value: "less" },
  { text: "Markdown", value: "markdown" },
  { text: "Marko", value: "marko" },
  { text: "MDC", value: "mdc" },
  { text: "MDX", value: "mdx" },
  { text: "PHP", value: "php" },
  { text: "PostCSS", value: "postcss" },
  { text: "Pug", value: "pug" },
  { text: "Python", value: "python" },
  { text: "R", value: "r" },
  { text: "RegExp", value: "regexp" },
  { text: "Sass", value: "sass" },
  { text: "SCSS", value: "scss" },
  { text: "Shell", value: "shellscript" },
  { text: "SQL", value: "sql" },
  { text: "Stylus", value: "stylus" },
  { text: "Svelte", value: "svelte" },
  { text: "TypeScript with Tags", value: "ts-tags" },
  { text: "TSX", value: "tsx" },
  { text: "TypeScript", value: "typescript" },
  { text: "Vue", value: "vue" },
  { text: "Vue HTML", value: "vue-html" },
  { text: "WebAssembly", value: "wasm" },
  { text: "WGSL", value: "wgsl" },
  { text: "XML", value: "xml" },
  { text: "YAML", value: "yaml" },
];

export type Language = (typeof LANGUAGES)[number]["value"];
export type Theme = (typeof THEMES)[number]["value"];
