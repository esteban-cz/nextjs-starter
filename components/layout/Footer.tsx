"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { info } from "@/app/resources";
import { InView } from "@/components/ui/in-view";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="border-t overflow-hidden">
      <InView
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 0.8, y: 0 },
        }}
        viewOptions={{ once: false }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Button
              onClick={scrollToTop}
              size="icon"
              variant="ghost"
              className="rounded-full"
            >
              <ArrowUp />
            </Button>
            <div className="text-sm text-muted-foreground mt-6">
              © {new Date().getFullYear()} {info.name}.{" "}
              <div className="sm:inline">All rights reserved.</div>
            </div>
          </div>
        </div>
      </InView>
    </footer>
  );
}
