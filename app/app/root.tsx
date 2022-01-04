import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCodeBranch, faMemory, faClock, faMicrochip, faHdd, faTimes, faSearch, faTerminal, faGlobe, faWindowMaximize, faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import globalStyle from "~/styles/global.css";

library.add(faCodeBranch, faMemory, faClock, faMicrochip, faHdd, faTimes, faSearch, faTerminal, faGlobe, faWindowMaximize, faArrowRight, faPlus, faGithub)

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: '/jakarta/stylesheet.css',
    },
    {
      rel: 'stylesheet',
      href: globalStyle,
    }
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
