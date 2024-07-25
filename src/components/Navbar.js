"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import Image from "next/image";
import { Spin as Hamburger } from "hamburger-react";
import { gsap } from "gsap";
import menu from "@config/menu.json";

export default function Navbar() {
  const [scrollTop, setScrollTop] = useState(0);
  const activeSegment = useSelectedLayoutSegment() || "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const links = menu.main;

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > scrollTop) {
        gsap.to(navbar, { y: -100, duration: 0.5 });
      } else {
        gsap.to(navbar, { y: 0, duration: 0.5 });
      }
      setScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTop]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        height: "auto",
        duration: 0.5,
        ease: "power1.out",
      });
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power1.out" }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        duration: 0.5,
        ease: "power1.in",
      });
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 1 },
        { opacity: 0, duration: 0.2, ease: "power1.in" }
      );
    }
  }, [isMobileMenuOpen]);

  return (
    <nav
      id="navbar"
      className={`${
        scrollTop < 100 ? " bg-white" : "bg-white"
      } text-primary  font-poppins flex flex-col w-full fixed top-0 z-[9999] transition-colors duration-500 shadow-xl`}
    >
      <div className="container px-[16px] lg:px-0 mx-auto">
        <div className="flex flex-row justify-between items-center py-4">
          <Link href="/">
            <Image
              height={1000}
              width={1000}
              src="/assets/navbar/main_logo.png"
              className="h-8 md:h-12 xl:h-14 w-auto cursor-pointer"
              alt="Logo"
            />
          </Link>

          {/* Desktop Navbar */}
          <div className="hidden lg:flex flex-row gap-12 items-center">
            {links.map((link) => (
              <Link
                className={`
              ${
                activeSegment === link.targetSegment
                  ? " border-black text-white bg-primary px-6 py-[10px] rounded-[10px] font-bold"
                  : "transition-transform text-black"
              }
            `}
                key={link.name}
                href={link.url}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Hamburger Toggle Mobile */}
          <div className="lg:hidden">
            <Hamburger
              easing="ease-in"
              toggled={isMobileMenuOpen}
              toggle={setIsMobileMenuOpen}
              color={`#000000`}
              size={20}
              hideOutline={false}
            />
          </div>
        </div>

        {/* Mobile Navbar */}
        <div
          ref={mobileMenuRef}
          className={`flex flex-col text-black lg:hidden text-center font-semibold overflow-hidden${
            scrollTop < 100 ? "bg-primary" : "bg-transparent"
          }`}
          style={{ height: 0 }}
        >
          {links.map((link, index) => (
            <Link
              className={`
          ${
            activeSegment === link.targetSegment
              ? "  text-primary"
              : " transition-transform"
          }
          ${index === links.length - 1 ? " mb-4" : ""}
         py-2`}
              key={link.name}
              href={link.url}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
