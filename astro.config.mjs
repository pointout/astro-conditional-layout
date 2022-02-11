// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
	// Comment out "renderers: []" to enable Astro's default component support.
	buildOptions: {
  	    // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    	sitemap: true,         // Generate sitemap (set to "false" to disable)
  	},
  	devOptions: {
    	hostname: 'localhost', //'0.0.0.0',  // The hostname to run the dev server on. 
    	port: 3000,             // The port to run the dev server on.
    	tailwindConfig: './tailwind.config.js',     // Path to tailwind.config.js if used, e.g. './tailwind.config.js'
  	},
  	renderers: [
    	"@astrojs/renderer-vue",
    	"@astrojs/renderer-svelte"
  	]
});
