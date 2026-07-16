"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export type ParallaxProduct = {
  title: string;
  description?: string;
  link: string;
  thumbnail: string;
};

export function HeroParallax({
  products,
  header,
}: {
  products: ParallaxProduct[];
  header?: React.ReactNode;
}) {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const translateX = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const translateXReverse = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const rotateX = useTransform(scrollYProgress, [0, 0.15], [10, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0.7, 1]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.15], [12, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.2], [-350, 400]);

  return (
    <div
      ref={ref}
      className="relative flex h-[240vh] flex-col self-auto overflow-hidden pt-32 pb-56 antialiased perspective-[1000px] transform-3d sm:pt-40 sm:pb-72"
    >
      {header}

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
          willChange: "transform",
        }}
        className="px-8 pt-64 sm:px-16 sm:pt-80"
      >
        <motion.div className="mb-14 flex flex-row-reverse space-x-reverse space-x-8 sm:mb-20 sm:space-x-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              priority
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="mb-14 flex flex-row space-x-8 sm:mb-20 sm:space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 sm:space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

function ProductCard({
  product,
  translate,
  priority = false,
}: {
  product: ParallaxProduct;
  translate: MotionValue<number>;
  priority?: boolean;
}) {
  return (
    <motion.div
      style={{ x: translate, willChange: "transform" }}
      whileHover={{ y: -20 }}
      key={product.title}
      className="group/product relative h-52 w-44 shrink-0 sm:h-80 sm:w-104"
    >
      <a
        href={product.link}
        target="_blank"
        rel="noreferrer"
        className={cn("relative block h-full w-full")}
      >
        <Image
          src={product.thumbnail}
          fill
          quality={70}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          sizes="(min-width: 640px) 26rem, 11rem"
          className="rounded-xl object-cover object-center shadow-[0_20px_50px_color-mix(in_oklab,var(--foreground)_14%,transparent)]"
          alt={product.title}
        />
      </a>
      <div className="pointer-events-none absolute inset-0 h-full w-full rounded-xl bg-black opacity-0 transition-opacity duration-300 group-hover/product:opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4 opacity-0 transition-opacity duration-300 group-hover/product:opacity-100">
        <h2 className="text-sm font-semibold text-white sm:text-base">
          {product.title}
        </h2>
        {product.description ? (
          <p className="text-xs text-white/80 sm:text-sm">
            {product.description}
          </p>
        ) : null}
      </div>
    </motion.div>
  );
}
