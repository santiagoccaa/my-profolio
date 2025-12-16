'use client';

import { useLayoutEffect } from 'react';

/**
 * Block scroll <body> if `active` is true.
 */
export const useBlockScroll = (active: boolean) => {
    useLayoutEffect(() => {
        if (!active) return;

        const body = document.body;
        const { overflow, paddingRight } = body.style;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        body.style.overflow = 'hidden';
        if (scrollbarWidth > 0) {
            body.style.paddingRight = `${scrollbarWidth}px`;
        }

        return () => {
            body.style.overflow = overflow;
            body.style.paddingRight = paddingRight;
        };
    }, [active]);
}