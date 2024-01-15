import React, { useState } from "react";
import { blackfbicon, blackinstaicon, blacklinkedicon, blacktwittericon, camsurf } from "../../assets";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="bg-transparent  ">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
                <a href="/">

              <img src={camsurf} className="w-[150px]" alt="" srcSet="" />
                </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-black transition hover:text-gray-500/75"
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-black transition hover:text-gray-500/75"
                      href="/aboutus"
                    >
                      
                      About Us
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black transition hover:text-gray-500/75"
                      href="/guidelines"
                    >
                      
                      Guidelines
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black transition hover:text-gray-500/75"
                      href="/storiespage"
                    >
                      Stories
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black transition hover:text-gray-500/75"
                      href="/faqspage"
                    >
                      
                      Faq
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black transition hover:text-gray-500/75"
                      href="/presspage"
                    >
                      
                      Press
                    </a>
                  </li>
                  {/* Add your other navigation items for desktop here */}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex hidden sm:gap-2">
                {/* Add your social media icons for desktop here */}
                <img src={blackfbicon} alt="" srcSet="" />
                <img src={blackinstaicon} alt="" srcSet="" />
                <img src={blacklinkedicon} alt="" srcSet="" />
                <img src={blacktwittericon} alt="" srcSet="" />
              </div>

              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={toggleMobileMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <nav aria-label="Mobile">
            <ul className="flex flex-col items-start px-4 gap-4 text-sm">
            <li>
                    <a
                      className="text-black transition hover:text-gray-500/75"
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-black transition hover:text-gray-500/75"
                      href="/aboutus"
                    >
                      
                      About Us
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black transition hover:text-gray-500/75"
                      href="/guidelines"
                    >
                      
                      Guidelines
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black transition hover:text-gray-500/75"
                      href="/storiespage"
                    >
                      Stories
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black transition hover:text-gray-500/75"
                      href="/faqspage"
                    >
                      
                      Faq
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black transition hover:text-gray-500/75"
                      href="/presspage"
                    >
                      
                      Press
                    </a>
                  </li>
              {/* Add your other navigation items for mobile here */}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
