'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { twMerge } from 'tailwind-merge';
import { SplitText } from 'gsap/all';
import { useRef } from 'react';
import Link from 'next/link';

interface MainButtonProps {
  variant?: string
  text: string
  className?: string
  onClick?: () => void
  href?: string
}

const MainButton = ({
  variant = 'primary',
  text,
  className = '',
  onClick,
  href = '',
}: MainButtonProps) => {
  const elementRef = useRef<any>(null);
  const topTextRef = useRef<HTMLDivElement>(null);
  const bottomTextRef = useRef<HTMLDivElement>(null);

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-neutral-30 hover:bg-neutral-30/[85%]';
      case 'secondary':
        return 'bg-beige-10 text-neutral-30 hover:bg-beige-20';
      case 'tertiary':
        return 'bg-white/[10%] border border-[#E3E1E1] text-neutral-30 hover:text-gray-800 hover:bg-white/[20%]';
      default:
        return 'bg-neutral-30 hover:bg-neutral-30/[85%]';
    }
  };

  useGSAP(() => {
    if (!elementRef.current || !topTextRef.current || !bottomTextRef.current) return;

    const topLetters = new SplitText(topTextRef.current, { type: 'chars' });
    const bottomLetters = new SplitText(bottomTextRef.current, { type: 'chars' });

    gsap.set(bottomLetters.chars, { y: '100%' });

    const handleEnter = () => {
      gsap.to(topLetters.chars, {
        y: '-100%',
        ease: 'power1.inOut',
        duration: 0.2,
        stagger: 0.01,
      });
      gsap.to(bottomLetters.chars, {
        y: '0%',
        ease: 'power1.inOut',
        duration: 0.2,
        stagger: 0.01,
      });
    };

    const handleLeave = () => {
      gsap.to(topLetters.chars, {
        y: '0%',
        ease: 'power1.inOut',
        duration: 0.2,
        stagger: 0.01,
      });
      gsap.to(bottomLetters.chars, {
        y: '100%',
        ease: 'power1.inOut',
        duration: 0.2,
        stagger: 0.01,
      });
    };

    elementRef.current.addEventListener("mouseenter", handleEnter);
    elementRef.current.addEventListener("mouseleave", handleLeave);

    return () => {
      elementRef.current?.removeEventListener("mouseenter", handleEnter);
      elementRef.current?.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const commonProps = {
    ref: elementRef,
    className: twMerge(`
      text-label
      rounded-full
      font-bold
      py-4 px-5.5
      ${getVariantStyles()}
      flex items-center justify-center
      ${className}
    `),
    onClick,
  }

  const content = (
    <div className='w-full inset-0 overflow-hidden whitespace-nowrap relative block'>
      <div ref={topTextRef} className=''>
        {text}
      </div>
      <div ref={bottomTextRef} className='absolute inset-0'>
        {text}
      </div>
    </div>
  )

  if (href) {
    return (
      <Link {...commonProps} href={href} scroll={false}>
        {content}
      </Link>
    )
  }

  return (
    <button {...commonProps}>
      {content}
    </button>
  );
};

export default MainButton;