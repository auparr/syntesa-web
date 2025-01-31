import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
  Link,
  LiveReload,
} from "@remix-run/react";
import { ThemeProvider, themeScript } from '~/contexts/ThemeContext';
import type { LinksFunction } from "@remix-run/node";
import AppLayout from "~/components/Layout";
import NotFound from "~/components/NotFound";
import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200..800&display=swap",
  },
];

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="h-full">
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}


export default function App() {
  return (
    <Document>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </Document>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="h-full">
        <ThemeProvider>
          <AppLayout>
            <NotFound
              errorMessage={isRouteErrorResponse(error) ? "page_not_found" : "unknown_error"}
              errorCode={isRouteErrorResponse(error) ? "not_found" : "error"}
            />
          </AppLayout>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}