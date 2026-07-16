"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
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

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig,
  );

  return (
    <div
      ref={ref}
      className="relative flex h-[260vh] flex-col self-auto overflow-hidden pt-32 pb-56 antialiased perspective-[1000px] transform-3d sm:pt-40 sm:pb-72"
    >
      {header}

      <motion.div style={{ rotateX, rotateZ, translateY, opacity }}>
        <motion.div className="mb-14 flex flex-row-reverse space-x-reverse space-x-8 sm:mb-20 sm:space-x-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
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
}: {
  product: ParallaxProduct;
  translate: MotionValue<number>;
}) {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      key={product.title}
      className="group/product relative h-52 w-44 shrink-0 sm:h-80 sm:w-104"
    >
      <a
        href={product.link}
        target="_blank"
        rel="noreferrer"
        className={cn("block h-full w-full")}
      >
        <Image
          src={product.thumbnail}
          fill
          sizes="(min-width: 640px) 26rem, 11rem"
          className="rounded-xl object-cover object-center shadow-[0_20px_50px_color-mix(in_oklab,var(--foreground)_14%,transparent)] transition-shadow duration-300 group-hover/product:shadow-[0_28px_60px_color-mix(in_oklab,var(--accent)_20%,transparent)]"
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
