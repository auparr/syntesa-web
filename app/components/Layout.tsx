import { Outlet } from "react-router";
import { socialLinks } from "~/constants/socialLinks";
import { useSmoothScroll } from "~/hooks/useSmoothScroll";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
  useSmoothScroll();

  return (
    <div className="relative min-h-screen">
      <Navbar socialLinks={socialLinks} />
      <main>
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
