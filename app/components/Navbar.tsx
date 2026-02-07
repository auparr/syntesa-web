import { useEffect, useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router";
import { logoDark, logoLight } from "~/assets/logo";
import type { SocialLink } from "~/types";
import DarkModeToggle from "./DarkModeToggle";

interface NavbarProps {
  socialLinks: SocialLink[];
}

export default function Navbar({ socialLinks }: NavbarProps) {
  const discordLink = socialLinks.find((link) => link.name === "Discord");
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      const diff = y - lastY.current;
      lastY.current = y;

      if (y < 80) {
        setHidden(false);
        return;
      }

      if (diff > 5) {
        setHidden(true);
      } else if (diff < -5) {
        setHidden(false);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 bg-white dark:bg-neutral-950 border-b border-gray-200 dark:border-neutral-800 transition-transform duration-350 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="max-w-480 mx-auto w-full border-x border-gray-200 dark:border-neutral-800">
        <div className="flex items-center justify-between h-20 px-6 sm:px-12">
          <div className="flex items-center">
            <Link to="/" className="block">
              <img src={logoLight} alt="Syntesa" className="h-8 w-auto dark:hidden" />
              <img src={logoDark} alt="Syntesa" className="h-8 w-auto hidden dark:block" />
            </Link>
          </div>

          <div className="flex items-center gap-6 sm:gap-8">
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/programs"
                className="text-sm font-medium text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-apple-blue-400 transition-colors"
              >
                Programs
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-apple-blue-400 transition-colors"
              >
                About
              </Link>
            </div>

            <div className="w-px h-6 bg-gray-200 dark:bg-neutral-800 hidden md:block" />

            <div className="flex items-center gap-4">
              <DarkModeToggle />

              {discordLink && (
                <a
                  href={discordLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-neutral-100 hover:opacity-70 transition-opacity"
                >
                  <span>Join</span>
                  <BsArrowRight />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
