import { css } from "@emotion/react";

const animate = (slide: string, style: string, from: number, to: number) => {
  const __from__ = { [style]: from };
  const __to__ = { [style]: to };
  return css`
    @keyframes ${slide} {
      0% {
        ${(() => __from__)()}
      }
      100% {
        ${(() => __to__)()}
      }
    }
  `;
};

export const ANIMATION_TYPES = Object.freeze({
  FADE_IN: "fadeIn",
  FADE_OUT: "fadeOut",
});

export const ANIMATION_STYLES = new Map([
  [
    ANIMATION_TYPES.FADE_IN,
    { animation: `${ANIMATION_TYPES.FADE_IN} 150ms linear 1 forwards` },
  ],
  [
    ANIMATION_TYPES.FADE_OUT,
    { animation: `${ANIMATION_TYPES.FADE_OUT} 150ms linear 1 forwards` },
  ],
]);

export default animate;
