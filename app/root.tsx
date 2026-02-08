import type { LinksFunction, MetaFunction } from "react-router";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "react-router";
import NotFound from "~/components/NotFound";
import { ThemeProvider } from "~/contexts/ThemeContext";
import "./tailwind.css";
import { SITE_META } from "./constants/site_meta";
import {
  generateMeta,
  generateOrganizationJsonLd,
  generatePreconnectLinks,
  generateSecurityMeta,
  generateWebSiteJsonLd,
} from "./utils/seo";

const themeScript = `
  let isDark;
  const theme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  isDark = theme === 'dark' || (!theme && systemTheme === 'dark');

  if (isDark) {
    document.documentElement.classList.add('dark');
  }
`;

const loaderDismissScript = `
  (function() {
    var loader = document.getElementById('__loader');
    if (!loader) return;
    document.documentElement.style.overflow = 'hidden';
    var start = Date.now();
    var MIN_DISPLAY = 800;
    var dismissed = false;

    function dismiss() {
      if (dismissed) return;
      dismissed = true;
      var elapsed = Date.now() - start;
      var remaining = Math.max(0, MIN_DISPLAY - elapsed);
      setTimeout(function() {
        document.documentElement.style.overflow = '';
        loader.classList.add('loader-exit');
        var removed = false;
        function remove() {
          if (removed) return;
          removed = true;
          loader.remove();
        }
        loader.addEventListener('transitionend', remove);
        setTimeout(remove, 700);
      }, remaining);
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(dismiss);
    } else {
      window.addEventListener('load', dismiss);
    }
  })();
`;

export const meta: MetaFunction = () => [...generateMeta(), ...generateSecurityMeta()];

export const links: LinksFunction = () => [
  { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
  { rel: "manifest", href: "/site.webmanifest" },
  ...generatePreconnectLinks(),
];

const jsonLd = JSON.stringify([generateOrganizationJsonLd(), generateWebSiteJsonLd()]);

function Document({
  children,
  title,
  showLoader = true,
}: {
  children: React.ReactNode;
  title?: string;
  showLoader?: boolean;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <meta
          name="theme-color"
          content={SITE_META.themeColor.light}
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content={SITE_META.themeColor.dark}
          media="(prefers-color-scheme: dark)"
        />
        <meta name="color-scheme" content="light dark" />
        {title && <title>{title}</title>}
        <Meta />
        <Links />
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: inline theme script prevents FOUC */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      </head>
      <body className="h-full">
        {showLoader && (
          <output id="__loader" className="loader-screen" aria-label="Loading">
            <div className="loader-ripple" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </output>
        )}
        {children}
        <ScrollRestoration />
        <Scripts />
        {showLoader && (
          // biome-ignore lint/security/noDangerouslySetInnerHtml: inline loader dismiss script
          <script dangerouslySetInnerHTML={{ __html: loaderDismissScript }} />
        )}
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
    <Document title={title} showLoader={false}>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-neutral-950">
          <NotFound
            errorMessage={isRouteErrorResponse(error) ? "page_not_found" : "unknown_error"}
            errorCode={isRouteErrorResponse(error) ? "not_found" : "error"}
          />
        </div>
      </ThemeProvider>
    </Document>
  );
}
