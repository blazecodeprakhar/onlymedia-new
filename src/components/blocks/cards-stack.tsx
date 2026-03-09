"use client"

import * as React from "react"
import { motion, HTMLMotionProps, MotionValue, useTransform, useMotionValue, useMotionTemplate } from "motion/react"
import { cn } from "@/lib/utils"

interface CardStickyProps extends HTMLMotionProps<"div"> {
    index: number
    incrementY?: number
    incrementZ?: number
    total?: number
    progress?: MotionValue<number>
}

const ContainerScroll = React.forwardRef<
    HTMLDivElement,
    React.HTMLProps<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn("relative w-full", className)}
            style={{ ...props.style }}
            {...props}
        >
            {children}
        </div>
    )
})
ContainerScroll.displayName = "ContainerScroll"

const CardSticky = React.forwardRef<HTMLDivElement, CardStickyProps>(
    (
        {
            index,
            incrementY = 25,
            incrementZ = 10,
            total = 5,
            progress,
            children,
            className,
            style,
            ...props
        },
        ref
    ) => {
        const cardSpacingVh = 55; // Natively peeks beautifully from the bottom
        const stackOffsetVh = 3;  // 3vh stack gap for older cards

        // We calculate when this specific card reaches its final stacked position
        // Progress reaches 1 at a total scroll of 275vh (mapped perfectly to parent container)
        const hitProgress = Math.min(1, (index * cardSpacingVh) / 275);

        const defaultProgress = useMotionValue(0);
        const currentProgress = progress || defaultProgress;

        // PERFORMANCE FIX FOR MOBILE: Disable scale on phones to prevent "stickiness" and lag
        const mobileScale = useMotionValue(1);
        const [isMobile, setIsMobile] = React.useState(false);

        React.useEffect(() => {
            setIsMobile(window.innerWidth < 1024);
        }, []);

        // Map the container's progress to the card's Y position using 'vh' directly
        // This ensures the cards look like they are scrolling up natively.
        // Once they hit their stack position, they remain there.
        let y: any;
        if (index === 0) {
            y = "0vh"; // Card 0 establishes the top of the deck
        } else {
            // MOBILE PERFORMANCE & FEEL FIX:
            // On desktop, we want a smooth, lazy scroll.
            // On mobile, the user wants "direct swapping" with no lag or "peeking" cards.
            // We make the card stay at the bottom (offscreen) until it's about to swap, then move it quickly.
            y = useTransform(
                currentProgress,
                isMobile
                    ? [0, hitProgress - 0.001, hitProgress, 1] // INSTANT "SWAP" for mobile - no intermediate state
                    : [0, hitProgress, 1], // Linear smooth scroll on desktop
                isMobile
                    ? [`100vh`, `100vh`, `${index * stackOffsetVh}vh`, `${index * stackOffsetVh}vh`]
                    : [`${index * cardSpacingVh}vh`, `${index * stackOffsetVh}vh`, `${index * stackOffsetVh}vh`]
            );
        }

        const isLastCard = index === total - 1;

        // Premium Depth Effect: Once the card has arrived, as the user keeps scrolling,
        // it visibly sinks into the background by scaling down (unless it's the sequence's final card).
        const scaleTarget = isLastCard ? 1 : 1 - (0.02 * (total - index));
        const scale = useTransform(
            currentProgress,
            [hitProgress, 1], // From "I have arrived" to "The user is leaving the section entirely"
            [1, scaleTarget] // Shrink backwards dynamically
        );

        const finalScale = isMobile ? mobileScale : scale;

        // White Fog Overlay: Instead of dropping opacity (which makes cards transparent and bleed text),
        // we fade in a solid white overlay to wash out the background text cleanly.
        // The last card should stay perfectly clear and opaque.
        const opacityTarget = isLastCard || isMobile ? 0 : 0.4; // REMOVE overlay fog for mobile
        const overlayOpacity = useTransform(
            currentProgress,
            [hitProgress, 1],
            [0, opacityTarget]
        );

        return (
            <motion.div
                ref={ref}
                style={{
                    y,
                    scale: finalScale,
                    zIndex: index * incrementZ,
                    backfaceVisibility: "hidden",
                    position: index === 0 ? "relative" : "absolute",
                    top: 0,
                    left: 0,
                    transformOrigin: "top center",
                    ...style,
                }}
                className={cn(
                    "w-full relative transition-shadow duration-300",
                    isMobile ? "shadow-none" : "shadow-2xl", // REMOVE heavy shadow for mobile
                    className
                )}
                {...props}
            >
                {/* Light blue wash overlay — fades older cards into the airy background cleanly */}
                {(
                    <motion.div
                        className="absolute inset-0 z-50 pointer-events-none rounded-[32px]"
                        style={{
                            opacity: overlayOpacity,
                            background: 'linear-gradient(135deg, #dbeafe 0%, #e0eeff 100%)',
                            borderRadius: isMobile ? '20px' : '32px'
                        }}
                    />
                ) as any}

                {children}
            </motion.div>
        )
    }
)

CardSticky.displayName = "CardSticky"

export { ContainerScroll, CardSticky }
