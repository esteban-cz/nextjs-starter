"use client";

import Link from "next/link";
import { motion } from "motion/react";
import ThemeButton from "@/components/ui/theme-button";
import { info } from "@/app/resources";
import { TextRoll } from "@/components/ui/text-roll";
import { Clock } from "@/components/ui/clock";

export default function Navbar() {
  return (
    <nav className="bg-background/80 fixed z-50 w-full border-b backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className="text-xl font-bold">
              <TextRoll>{info.name}</TextRoll>
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
            <Clock />
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
