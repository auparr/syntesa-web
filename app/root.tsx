import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
  Link,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import AppLayout from "~/components/Layout";

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

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
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
      </head>
      <body className="h-full">
        <AppLayout>
          <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-gray-50/80
                dark:from-black dark:via-gray-900 dark:to-black animate-gradient-xy" />

              {/* Animated circles */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64
                  bg-apple-blue-500/[0.03] dark:bg-apple-blue-400/[0.03]
                  rounded-full blur-3xl animate-pulse-slow"
                  style={{ animationDuration: '10s' }} />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96
                  bg-apple-blue-600/[0.02] dark:bg-apple-blue-500/[0.02]
                  rounded-full blur-3xl animate-pulse-slow"
                  style={{ animationDuration: '15s', animationDelay: '-5s' }} />
              </div>

              {/* Subtle grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(77,145,255,0.02)_0.5px,transparent_0.5px),linear-gradient(to_right,rgba(77,145,255,0.02)_0.5px,transparent_0.5px)]
                dark:bg-[linear-gradient(rgba(77,145,255,0.01)_0.5px,transparent_0.5px),linear-gradient(to_right,rgba(77,145,255,0.01)_0.5px,transparent_0.5px)]
                bg-[size:32px_32px] opacity-75" />
            </div>

            <div className="relative text-center px-4">
              {/* Large 404 with gradient */}
              <div className="relative">
                <h1 className="text-[12rem] sm:text-[16rem] font-bold leading-none
                  bg-clip-text text-transparent bg-gradient-to-b from-gray-900/80 to-gray-900/20
                  dark:from-white/80 dark:to-white/20">
                  404
                </h1>

                {/* Decorative elements */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-64 h-64
                  bg-apple-blue-500/10 dark:bg-apple-blue-400/10
                  rounded-full blur-3xl" />
              </div>

              {/* Error message */}
              <div className="space-y-6 mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  {isRouteErrorResponse(error)
                    ? "Page not found"
                    : "Something went wrong"}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                  The page you're looking for doesn't exist or has been moved.
                  Let's get you back on track.
                </p>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                  <Link
                    to="/"
                    className="px-8 py-4 rounded-full bg-gray-900 dark:bg-white
                      text-white dark:text-gray-900 text-base font-medium
                      hover:shadow-xl transform transition-all duration-300
                      shadow-gray-900/10"
                  >
                    Return Home
                  </Link>
                  <Link
                    to=".."
                    className="px-8 py-4 rounded-full border-2 border-gray-900/10 dark:border-white/10
                      text-base font-medium text-gray-900 dark:text-white
                      hover:bg-gray-900/5 dark:hover:bg-white/5 transition-all duration-300"
                  >
                    Go Back
                  </Link>
                </div>
              </div>

              <div className="absolute bottom-2 left-4 hidden sm:block opacity-30">
                <pre className="text-left text-sm text-gray-600 dark:text-gray-400">
                  <code>{`404 {
  status: "not_found",
  error: ${isRouteErrorResponse(error) ? '"page_not_found"' : '"unknown_error"'}
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </AppLayout>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}