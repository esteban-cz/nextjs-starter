"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { info } from "@/app/resources";
import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { TextShimmerWave } from "@/components/ui/text-shimmer-wave";

export default function HomePage() {
  return (
    <div className="py-16">
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center"
        >
          <h1 className="text-4xl font-bold sm:text-6xl mb-8 ">
            <TextShimmerWave className="sm:inline mt-2 sm:mt-0">{info.name}</TextShimmerWave>
          </h1>
          <InfiniteSlider speedOnHover={20} gap={24}>
            <span className="text-primary">Text Primary</span>
            {" | "}
            <span className="text-secondary">Text Secondary</span>
            {" | "}
            <span className="text-muted">Text Muted</span>
            {" | "}
            <span className="text-accent">Text Accent</span>
            {" | "}
            <span className="text-destructive">Text Destructive</span>
            {" | "}
            <span className="text-success">Text Success</span>
            {" | "}
          </InfiniteSlider>
          <InfiniteSlider speedOnHover={20} gap={20} className="mt-4">
          <span className="bg-primary text-primary-foreground">
              Bg Primary
            </span>
            {" | "}
            <span className="bg-secondary text-secondary-foreground">
              Bg Secondary
            </span>
            {" | "}
            <span className="bg-muted text-muted-foreground">Bg Muted</span>
            {" | "}
            <span className="bg-accent text-accent-foreground">Bg Accent</span>
            {" | "}
            <span className="bg-destructive text-destructive-foreground">
              Bg Destructive
            </span>
            {" | "}
            <span className="bg-success text-success-foreground">
              Bg Success
            </span>
            {" | "}
          </InfiniteSlider>
          <InfiniteSlider speedOnHover={20} gap={20} className="mt-8" reverse>
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="success">Success</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </InfiniteSlider>
        </motion.div>
      </section>

      <section className="bg-background flex text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24 text-center"
        >
          <div className="relative mx-auto max-w-full overflow-hidden">
            <Image
              src={info.image}
              width={600}
              height={300}
              title={info.name}
              alt={info.name}
              priority={true}
              className="rounded-lg border-2"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
