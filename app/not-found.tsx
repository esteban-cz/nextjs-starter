import BackButton from "@/components/ui/back-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "404 - Not Found",
  },

  description: "We're sorry, but the page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="from-primary/10 via-background to-background flex min-h-screen items-center justify-center bg-gradient-to-b p-4 text-center">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold text-red-500">404</h1>
        <p className="text-muted-foreground text-xl">
          We're sorry, but the page you're looking for doesn't exist.
        </p>
        <BackButton />
      </div>
    </div>
  );
}
