import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
  LiveReload,
} from "@remix-run/react";
import { ThemeProvider } from '~/contexts/ThemeContext';
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import AppLayout from "~/components/Layout";
import NotFound from "~/components/NotFound";
import "./tailwind.css";
import "./openstreetmap.css"
import { SITE_META } from "./constants/site_meta";

const themeScript = `
  let isDark;
  const theme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  isDark = theme === 'dark' || (!theme && systemTheme === 'dark');

  if (isDark) {
    document.documentElement.classList.add('dark');
  }
`;

export const meta: MetaFunction = () => [
  { charset: "utf-8" },
  { title: SITE_META.title },
  { viewport: "width=device-width,initial-scale=1" },
  { name: "description", content: SITE_META.description },
  { property: "og:title", content: SITE_META.title },
  { property: "og:description", content: SITE_META.description },
  { property: "og:type", content: "website" },
  { property: "og:url", content: SITE_META.siteUrl },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: SITE_META.title },
  { name: "twitter:description", content: SITE_META.description },
];

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200..800&display=swap" },
  { rel: "canonical", href: SITE_META.siteUrl },
];

function Document({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        {title && <title>{title}</title>}
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
    <Document title={SITE_META.title}>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </Document>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  const title = `Error - ${SITE_META.title}`;

  return (
    <Document title={title}>
      <ThemeProvider>
        <AppLayout>
          <NotFound
            errorMessage={isRouteErrorResponse(error) ? "page_not_found" : "unknown_error"}
            errorCode={isRouteErrorResponse(error) ? "not_found" : "error"}
          />
        </AppLayout>
      </ThemeProvider>
    </Document>
  );
}