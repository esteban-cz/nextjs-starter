"use client";

import { motion } from "framer-motion";
import LoadingScreen from "@/components/layout/LoadingScreen";
import Link from "next/link";

export default function RootPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-background text-foreground px-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="z-10 text-center max-w-xl"
      >
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Vítejte na <span className="md:hidden inline">webu</span>{" "}
          <span className="text-primary mt-1 md:inline block">
            Body Therapy Prague
          </span>
        </h1>

        <p className="mt-4 text-muted-foreground text-sm sm:text-base">
          Tato stránka slouží pro vyhledávače a sociální sítě. Pokud jste člověk
          a přesměrování se nespustilo automaticky, nejspíše je zablokované.
        </p>

        <p className="mt-4 text-sm sm:text-base text-muted-foreground hidden md:block">
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

        <div className="mt-4 text-sm sm:text-base text-muted-foreground block md:hidden space-y-1 text-center">
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
