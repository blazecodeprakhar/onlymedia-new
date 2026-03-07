'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export default function PageLoader() {
    const [visible, setVisible] = useState(true)
    const [phase, setPhase] = useState<'entering' | 'loaded' | 'exiting'>('entering')

    useEffect(() => {
        const t1 = setTimeout(() => setPhase('loaded'), 600)
        const t2 = setTimeout(() => setPhase('exiting'), 1100)
        const t3 = setTimeout(() => setVisible(false), 1900)
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
    }, [])

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="loader"
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] } }}
                >
                    {/* Top accent bar */}
                    <motion.div
                        className="absolute top-0 left-0 w-full h-[2px] bg-accent-blue"
                        initial={{ scaleX: 0, transformOrigin: 'left' }}
                        animate={{ scaleX: phase === 'entering' ? 0.4 : 1 }}
                        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                    />

                    {/* Logo / wordmark */}
                    <div className="flex flex-col items-center gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                            className="text-neutral-30 text-[44px] font-black tracking-tight leading-none"
                        >
                            Only<span className="text-accent-blue">Media</span>
                        </motion.div>

                        {/* Loading dots */}
                        <motion.div
                            className="flex gap-1.5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: phase === 'entering' ? 0 : 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {[0, 1, 2].map(i => (
                                <motion.div
                                    key={i}
                                    className="w-1.5 h-1.5 rounded-full bg-accent-blue"
                                    animate={{ opacity: [0.25, 1, 0.25] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 0.9,
                                        delay: i * 0.15,
                                        ease: 'easeInOut'
                                    }}
                                />
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

