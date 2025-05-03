"use client";

import { HeroSection } from "@/components/hero-section";
import { motion } from "motion/react";
// import { useState, useEffect } from "react";
// import { createClient } from "@/lib/supabase/client";

export default function Home() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const supabase = createClient();

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     const {
  //       data: { user },
  //     } = await supabase.auth.getUser();
  //     setIsAuthenticated(!!user);
  //   };

  //   checkAuth().catch((err) => {
  //     console.error("Error fetching current user:", err);
  //   });

  //   const {
  //     data: { subscription },
  //   } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setIsAuthenticated(!!session?.user);
  //   });

  //   return () => subscription.unsubscribe();
  // }, [supabase]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="from-primary via-background to-background flex min-h-screen flex-col bg-gradient-to-br"
    >
      <HeroSection />
    </motion.div>
  );
}
