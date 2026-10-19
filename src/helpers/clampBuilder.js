import { BREAKPOINTS } from '@/constants/breakpoints';

export const clampBuilder = (minPx, maxPx) => {
  const { mobileMin, mobile } = BREAKPOINTS;

  const minWidth = Number.parseFloat(mobileMin) || 320;
  const maxWidth = Number.parseFloat(mobile) || 375;

  const slope = (maxPx - minPx) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minPx;

  const vw = Number((slope * 100).toFixed(4));
  const px = Number(yAxisIntersection.toFixed(4));

  let val = `${vw}vw`;
  if (px > 0) {
    val += ` + ${px}px`;
  } else if (px < 0) {
    val += ` - ${Math.abs(px)}px`;
  }

  return `clamp(${minPx}px, calc(${val}), ${maxPx}px)`;
};
