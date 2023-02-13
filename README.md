# LWC Boilerplate componentes

The **LWC Boilerplate** componentes contains the minimum code needed to get a simple Single Page Application (SPA) on LWR running.

## Project Setup

The directory structure looks like this:

```
scripts/
  └── start-server.mjs  // create and start server
src/
  ├── assets/           // static assets
  │   └── recipes-logo.png
  └── modules/          // lwc modules
      └── componentes/
          └── app/
              ├── app.css
              ├── app.html
              └── app.js
lwr.config.json         // lwr configuration
package.json            // npm packaging configuration
```

## Configuration

The LWR server is configured in `lwr.config.json`, at the root of the project. The **LWC Boilerplate** componentes has one LWC module and one server-side route.

```json
// lwr.config.json
{
    "lwc": { "modules": [{ "dir": "$rootDir/src/modules" }] },
    "routes": [
        {
            "id": "componentes",
            "path": "/",
            "rootComponent": "componentes/app"
        }
    ]
}
```

## Running the Project

```bash
yarn install
yarn build
yarn start # prod mode and ESM format
```

Open the site at [http://localhost:3000](http://localhost:3000)

To start the project in a different mode:

-   dev: `yarn dev`
-   compat: `yarn start:compat`
-   prod-compat: `yarn start:prod-compat`
