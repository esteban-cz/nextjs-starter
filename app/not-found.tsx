import BackButton from "@/components/ui/back-button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "404 - Not Found",
  },

  description: "We're sorry, but the page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-background to-background flex items-center text-center justify-center p-4">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-red-500">404</h1>
        <p className="text-xl text-muted-foreground">
          We&apos;re sorry, but the page you&apos;re looking for doesn&apos;t
          exist.
        </p>
        <BackButton />
      </div>
    </div>
  );
}
