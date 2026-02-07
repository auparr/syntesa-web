declare module "*&format=webp" {
  const src: string;
  export default src;
}

declare module "*?w=*" {
  const src: string;
  export default src;
}

// View Transition API (not yet in ES2022 DOM lib)
interface ViewTransition {
  finished: Promise<void>;
  ready: Promise<void>;
  updateCallbackDone: Promise<void>;
}

interface Document {
  startViewTransition?: (callback: () => void) => ViewTransition;
}
