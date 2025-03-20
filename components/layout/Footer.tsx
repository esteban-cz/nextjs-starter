"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { info } from "@/app/resources";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="border-t">
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
    </footer>
  );
}
