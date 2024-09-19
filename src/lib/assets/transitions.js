import { cubicOut } from 'svelte/easing';

export function backgroundColor(node, { fromColor, toColor }) {
  return {
    duration: 500,
    easing: cubicOut,
    css: t => {
      const interpolate = (start, end) => start + (end - start) * t;
      const [r1, g1, b1] = fromColor;
      const [r2, g2, b2] = toColor;
      const r = interpolate(r1, r2);
      const g = interpolate(g1, g2);
      const b = interpolate(b1, b2);
      return `background-color: rgb(${r}, ${g}, ${b});`;
    }
  };
}