'use client'

import { useEffect } from 'react';

export default function ScrollToTop() {
  useEffect(() => {
    // Ensure page starts at top on route change
    window.scrollTo(0, 0);
  }, []);

  return null;
}
