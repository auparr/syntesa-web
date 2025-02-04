/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

// Defer non-critical scripts
const deferScriptLoad = () => {
  const nonCriticalScripts = document.querySelectorAll(
    'script[data-defer="true"]'
  );
  nonCriticalScripts.forEach((script) => {
    script.setAttribute("src", script.getAttribute("data-src") || "");
  });
};

if (typeof requestIdleCallback === "function") {
  requestIdleCallback(deferScriptLoad);
} else {
  setTimeout(deferScriptLoad, 1000);
}

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});

