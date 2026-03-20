'use client'
 
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
 
export default function PageLoader() {
    const [visible, setVisible] = useState(true)
    const [progress, setProgress] = useState(0)
 
    const EXPO_EASE = [0.16, 1, 0.3, 1] as const;
 
    useEffect(() => {
        const duration = 2000; // 2 seconds for a more premium cinematic feel
        const startTime = performance.now();
 
        const animateProgress = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const nextProgress = Math.min((elapsed / duration) * 100, 100);
            
            // Smoother easing for the scale/progress
            const easeOutProgress = 1 - Math.pow(1 - (nextProgress / 100), 4);
            setProgress(easeOutProgress * 100);
 
            if (elapsed < duration) {
                requestAnimationFrame(animateProgress);
            } else {
                setTimeout(() => setVisible(false), 500);
            }
        };
 
        requestAnimationFrame(animateProgress);
    }, []);
 
    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="loader"
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F9FBFF] overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{ 
                        y: '-100%', 
                        transition: { duration: 1, ease: EXPO_EASE } 
                    }}
                >
                    {/* Subtle top loading line */}
                    <motion.div
                        className="absolute top-0 left-0 w-full h-[6px] bg-accent-blue z-30"
                        initial={{ scaleX: 0, transformOrigin: 'left' }}
                        animate={{ scaleX: progress / 100 }}
                        transition={{ duration: 0.1, ease: "linear" }}
                    />
 
                    {/* Animated Logo Central Area */}
                    <div className="relative flex flex-col items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 1.5, ease: EXPO_EASE }}
                            className="relative z-10"
                        >
                            <Image 
                                src="/images/OM1Final-1.png" 
                                alt="OnlyMedia" 
                                width={280} 
                                height={80} 
                                className="object-contain w-[140px] md:w-[280px] h-auto"
                                priority
                            />
                        </motion.div>
 
                        {/* Cinematic Pulse Ring */}
                        <motion.div 
                            className="absolute inset-0 -m-8 border-2 border-accent-blue/10 rounded-full"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: [0.5, 1.2], opacity: [0, 0.3, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: EXPO_EASE }}
                        />
                    </div>
 
                    {/* Minimal Progress Bar at bottom */}
                    <div className="absolute bottom-20 w-40 h-[2px] bg-neutral-30/5 overflow-hidden rounded-full">
                        <motion.div 
                            className="h-full bg-accent-blue"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: "linear" }}
                        />
                    </div>
 
                    {/* Background architectural lines for premium feel */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0 flex justify-between px-10 md:px-32">
                        <div className="w-[1px] h-full bg-neutral-30"></div>
                        <div className="w-[1px] h-full bg-neutral-30 hidden md:block"></div>
                        <div className="w-[1px] h-full bg-neutral-30 hidden lg:block"></div>
                        <div className="w-[1px] h-full bg-neutral-30"></div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
