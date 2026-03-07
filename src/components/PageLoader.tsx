'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export default function PageLoader() {
    const [visible, setVisible] = useState(true)
    const [progress, setProgress] = useState(0)
    const [, setPhase] = useState<'entering' | 'loading' | 'exiting'>('entering')

    const EXPO_EASE = [0.16, 1, 0.3, 1] as const;

    useEffect(() => {
        setPhase('loading');

        const duration = 1800; // 1.8 seconds loading experience
        const startTime = performance.now();

        const animateProgress = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const nextProgress = Math.min((elapsed / duration) * 100, 100);

            // Easing out curve for the counter
            const easeOutProgress = 1 - Math.pow(1 - (nextProgress / 100), 3);
            setProgress(Math.floor(easeOutProgress * 100));

            if (elapsed < duration) {
                requestAnimationFrame(animateProgress);
            } else {
                setPhase('exiting');
                setTimeout(() => setVisible(false), 900); // Wait for exit animation to finish
            }
        };

        requestAnimationFrame(animateProgress);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="loader"
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#E8F2FC] overflow-hidden"
                    initial={{ y: 0 }}
                    exit={{ y: '-100%', transition: { duration: 0.9, ease: EXPO_EASE } }}
                >
                    {/* Top Top decorative line */}
                    <motion.div
                        className="absolute top-0 left-0 w-full h-[4px] bg-accent-blue z-20"
                        initial={{ scaleX: 0, transformOrigin: 'left' }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.8, ease: EXPO_EASE }}
                    />

                    {/* Top HUD Area */}
                    <motion.div
                        className="w-full p-8 flex justify-between items-start z-10"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: EXPO_EASE, delay: 0.3 }}
                    >
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-neutral-30">Loading</span>
                            <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-neutral-20">System Init</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] font-mono text-neutral-30">{progress}%</span>
                        </div>
                    </motion.div>

                    {/* Center Logo Area */}
                    <div className="flex flex-col items-center gap-6 relative z-10 w-full px-4 text-center">
                        {/* Decorative Subheadline */}
                        <motion.div
                            className="flex items-center gap-4 justify-center w-full"
                            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 1, ease: EXPO_EASE, delay: 0.1 }}
                        >
                            <span className="h-[1px] w-8 md:w-16 bg-neutral-20 rounded-full hidden sm:block" />
                            <p className="text-neutral-30 tracking-[0.4em] uppercase font-bold text-[10px] md:text-[12px]">
                                PERFORMANCE MEDIA AGENCY
                            </p>
                            <span className="h-[1px] w-8 md:w-16 bg-neutral-20 rounded-full hidden sm:block" />
                        </motion.div>

                        {/* Main Logo Text mapped closely to Hero typography */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: EXPO_EASE }}
                            className="flex flex-col items-center py-4"
                        >
                            <div className="text-neutral-30 text-[60px] md:text-[100px] lg:text-[140px] font-black tracking-[-0.04em] leading-[1] flex flex-wrap justify-center overflow-hidden pb-4 md:pb-8">
                                <motion.span
                                    initial={{ y: '120%' }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 1.1, ease: EXPO_EASE, delay: 0.1 }}
                                    className="pt-4 inline-block"
                                >
                                    Only
                                </motion.span>
                                <motion.span
                                    className="text-accent-blue italic font-serif font-medium pr-4 pt-4 ml-2 inline-block origin-bottom"
                                    initial={{ y: '120%', rotate: 10, opacity: 0 }}
                                    animate={{ y: 0, rotate: 0, opacity: 1 }}
                                    transition={{ duration: 1.1, ease: EXPO_EASE, delay: 0.2 }}
                                >
                                    Media.
                                </motion.span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Area - Progress Bar */}
                    <div className="w-full h-32 md:h-40 flex flex-col justify-end p-8 md:p-16 z-10 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards_0.5s]">
                        <div className="w-full max-w-4xl mx-auto flex flex-col gap-4">
                            <div className="flex justify-between items-end">
                                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-neutral-30">Initiating sequence</span>
                                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-neutral-30 font-mono">00:0{Math.floor(progress / 33)}</span>
                            </div>
                            <div className="w-full h-[2px] bg-neutral-20/20 relative overflow-hidden rounded-full">
                                <motion.div
                                    className="absolute top-0 left-0 h-full bg-accent-blue rounded-full"
                                    style={{ width: `${progress}%` }}
                                    transition={{ ease: "linear" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Background architectural lines for premium feel */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 flex justify-between px-10 md:px-32">
                        <div className="w-[1px] h-full bg-black"></div>
                        <div className="w-[1px] h-full bg-black hidden md:block"></div>
                        <div className="w-[1px] h-full bg-black hidden lg:block"></div>
                        <div className="w-[1px] h-full bg-black"></div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

