# Weber Fridge

Website for **Weber Fridge**, a community-run free refrigerator and pantry located at 301 E 28th Street, Ogden, UT 84414. Free food, no stigma — open 24/7 to anyone who needs it.

Built with [SvelteKit](https://svelte.dev/docs/kit) and [Tailwind CSS v4](https://tailwindcss.com/).

## Pages

- **Home** — intro, photo gallery, community partners
- **About** — mission, how it works, partners, fridge location
- **Events** — weekly Sunday breakfast + upcoming and past events
- **Get Involved** — food donations, financial donations, volunteering
- **Supporters** — Urban Prairie Agriculture, Lost Texan BBQ, USARA Ogden
- **Contact** — contact form (delivered via Mailgun)

## Local development

Install dependencies:

```sh
npm install
```

Copy the environment file and add your Mailgun API key:

```sh
cp .env.example .env
```

Then open `.env` and replace the placeholder with your real key. The contact form won't send emails without it, but the rest of the site works fine.

Start the dev server:

```sh
npm run dev

# or open in a browser tab automatically
npm run dev -- --open
```

## Building for production

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

To deploy, install a SvelteKit adapter for your target platform. See the [adapter docs](https://svelte.dev/docs/kit/adapters) for options (Vercel, Netlify, Node, etc.).

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `MAILGUN_API_KEY` | For contact form | Your Mailgun private API key |

The sending domain (`mg.weberfridge.org`) and recipient address are set directly in `src/routes/contact/+page.server.js`.

## Contributing

Contributions are welcome! This is a community project and we appreciate help from the public — whether that's fixing a bug, improving accessibility, updating content, or adding a feature.

1. Fork the repo and create a branch for your change
2. Make your changes and test locally with `npm run dev`
3. Open a pull request with a clear description of what you've done

For content changes or larger ideas, feel free to open an issue first to discuss. You can also reach us through the contact form on the site or join the volunteer Signal chat linked on the Get Involved page.
