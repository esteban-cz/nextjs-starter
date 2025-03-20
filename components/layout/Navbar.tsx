"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ThemeButton from "@/components/ui/theme-button";
import { info } from "@/app/resources";

export default function Navbar() {
  return (
    <nav className="fixed w-full backdrop-blur-sm bg-background/80 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className="text-xl font-bold">
              {info.name}
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2"
          >
            <ThemeButton />
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
