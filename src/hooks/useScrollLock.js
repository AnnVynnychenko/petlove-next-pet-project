'use client';

import { useEffect } from 'react';

export const useScrollLock = (isLocked = true) => {
  useEffect(() => {
    if (!isLocked) return;

    const computedStyle = window.getComputedStyle(document.body);
    const originalOverflow = computedStyle.overflow;
    const originalPaddingRight = computedStyle.paddingRight;

    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const currentPadding = parseFloat(originalPaddingRight) || 0;

    document.body.style.overflow = 'hidden';

    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${currentPadding + scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isLocked]);
};
