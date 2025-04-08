"use client";

import { motion } from "framer-motion";
import LoadingScreen from "@/components/layout/LoadingScreen";
import Link from "next/link";

export default function RootPage() {
  return (
    <div className="bg-background text-foreground relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="z-10 max-w-xl text-center"
      >
        <p className="text-muted-foreground mt-4 text-sm sm:text-base">
          This page is for search engines and social networks. If you are a
          human and the redirection did not start automatically, it is probably
          blocked.
        </p>

        <p className="text-muted-foreground mt-4 hidden text-sm sm:text-base md:block">
          Pro českou verzi webu{" "}
          <Link href="/cs" className="text-primary font-medium hover:underline">
            klikněte zde
          </Link>
          , for english version{" "}
          <Link href="/en" className="text-primary font-medium hover:underline">
            click here
          </Link>
          .
        </p>

        <div className="text-muted-foreground mt-4 block space-y-1 text-center text-sm sm:text-base md:hidden">
          <p>
            Pro českou verzi webu{" "}
            <Link
              href="/cs"
              className="text-primary font-medium hover:underline"
            >
              klikněte zde
            </Link>
            .
          </p>
          <p>
            For english version{" "}
            <Link
              href="/en"
              className="text-primary font-medium hover:underline"
            >
              click here
            </Link>
            .
          </p>
        </div>
      </motion.div>

      <div className="absolute top-40 sm:top-32">
        <LoadingScreen />
      </div>
    </div>
  );
}
