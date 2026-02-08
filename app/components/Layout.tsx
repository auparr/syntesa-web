import { Outlet } from "react-router";
import { socialLinks } from "~/constants/socialLinks";
import { useSmoothScroll } from "~/hooks/useSmoothScroll";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
  useSmoothScroll();

  return (
    <div className="relative min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gray-900 focus:text-white focus:dark:bg-white focus:dark:text-gray-900 focus:rounded-md focus:font-medium focus:text-sm focus:no-underline focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Navbar socialLinks={socialLinks} />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <div className="motion-safe:animate-[fade-up_0.3s_cubic-bezier(0.22,1,0.36,1)_both]">
          <Outlet />
        </div>
      </main>
      <div className="mt-2">
        <Footer socialLinks={socialLinks} />
      </div>
    </div>
  );
}
