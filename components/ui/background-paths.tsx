"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 28 }, (_, i) => ({
        id: i,
        d: `M-${360 - i * 6 * position} -${150 + i * 8}C-${
            360 - i * 6 * position
        } -${150 + i * 8} -${280 - i * 6 * position} ${180 - i * 6} ${
            180 - i * 6 * position
        } ${300 - i * 8}C${640 - i * 6 * position} ${420 - i * 8} ${
            760 - i * 6 * position
        } ${840 - i * 8} ${760 - i * 6 * position} ${840 - i * 8}`,
        width: 1 + i * 0.06,
        opacity: 0.22 + i * 0.02,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="h-full w-full"
                viewBox="0 0 696 316"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        strokeWidth={path.width}
                        strokeOpacity={path.opacity}
                        className="stroke-cyan-400 dark:stroke-cyan-300"
                        initial={{ pathLength: 0.15, opacity: 0.15 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.12, path.opacity, 0.12],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 10 + path.id * 0.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Background Paths",
}: {
    title?: string;
}) {
    const words = title.split(" ");

    return (
        <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-950">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.35),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.35),transparent_35%),radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.25),transparent_40%)]" />

            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/75" />

            <div className="relative z-10 container mx-auto px-4 text-center md:px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="mx-auto max-w-4xl"
                >
                    <h1 className="mb-8 text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="mr-4 inline-block last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 80, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay:
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 140,
                                            damping: 20,
                                        }}
                                        className="inline-block bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-300 bg-clip-text text-transparent"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    <div className="group relative inline-block overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-cyan-500/30 p-px shadow-[0_0_30px_rgba(6,182,212,0.35)] backdrop-blur-lg transition-shadow duration-300 hover:shadow-[0_0_45px_rgba(56,189,248,0.5)]">
                        <Button
                            variant="ghost"
                            className="rounded-[1.15rem] border border-cyan-300/30 bg-slate-900/90 px-8 py-6 text-lg font-semibold text-cyan-100 backdrop-blur-md transition-all duration-300 hover:bg-slate-900 group-hover:-translate-y-0.5"
                        >
                            <span className="opacity-90 transition-opacity group-hover:opacity-100">
                                Discover Excellence
                            </span>
                            <span className="ml-3 opacity-70 transition-all duration-300 group-hover:translate-x-1.5 group-hover:opacity-100">
                                →
                            </span>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
