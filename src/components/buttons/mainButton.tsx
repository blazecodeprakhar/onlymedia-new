'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { twMerge } from 'tailwind-merge';
import { SplitText } from 'gsap/all';
import { useRef } from 'react';

interface MainButtonProps {
  variant?: string
  text: string
  className?: string
  onClick?: () => void
}

const MainButton = ({ 
  variant = 'primary',
  text,
  className = '',
  onClick,
}: MainButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
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
    }
  };

  useGSAP(() => {
    if (!buttonRef.current || !topTextRef.current || !bottomTextRef.current) return;

    const topLetters = new SplitText(topTextRef.current, { type: 'chars' });
    const bottomLetters = new SplitText(bottomTextRef.current, { type: 'chars' });

    gsap.set(bottomLetters.chars, { y: '100%' });

    buttonRef.current.addEventListener("mouseenter", () => { 
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
    });

    buttonRef.current.addEventListener("mouseleave", () => { 
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
    });
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={twMerge(`
        text-label
        rounded-full
        font-bold
        py-4 px-5.5
        ${getVariantStyles()}
        ${className}
      `)}
    >
      <div className='w-full inset-0 overflow-hidden whitespace-nowrap relative block'>

      <div ref={topTextRef} className=''>
        {text}
      </div>
      <div ref={bottomTextRef} className='absolute inset-0'>
        {text}
      </div>
      </div>
    </button>
  );
};

export default MainButton;