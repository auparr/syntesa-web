import { StrictMode, startTransition } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

startTransition(() => {
  hydrateRoot(
    document.documentElement,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>,
  );
});
