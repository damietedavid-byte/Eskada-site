/**
 * To solve the issue of unreliable external image links, this file provides
 * self-contained SVG images as data URLs. They are lightweight, load instantly,
 * and will never result in a broken image link.
 */

// A simple function to create a data URL from an SVG string.
const svgToDataUrl = (svg: string): string => `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

// A function to generate a consistent placeholder SVG.
const createPlaceholder = (text: string, backgroundColor: string = '#e9ecef', textColor: string = '#495057'): string => {
  const svg = `
    <svg width="500" height="300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" preserveAspectRatio="xMidYMid slice">
      <rect width="100%" height="100%" fill="${backgroundColor}"></rect>
      <text x="50%" y="50%" fill="${textColor}" dy=".3em" font-family="Montserrat, sans-serif" font-size="20" text-anchor="middle" font-weight="bold">
        ${text}
      </text>
    </svg>
  `;
  return svgToDataUrl(svg);
};

// --- Page Images ---
export const HERO_IMAGE = createPlaceholder('Vibrant Nigerian Market', '#0284c7', '#f0f9ff'); // blue-700, blue-50
export const TEAM_IMAGE = createPlaceholder('Eskada Professionals', '#f0f9ff', '#0284c7'); // blue-50, blue-700
export const LOCATION_IMAGE = createPlaceholder('Port Harcourt Office Location', '#dbeafe', '#1e3a8a'); // blue-100, blue-900

// --- Product Images ---
export const FRESH_CATFISH_IMG = createPlaceholder('Fresh Catfish', '#dcfce7'); // green-100
export const PURE_PALM_OIL_IMG = createPlaceholder('Pure Palm Oil', '#fef9c3'); // yellow-100
export const SWEET_MANGOES_IMG = createPlaceholder('Sweet Mangoes', '#fee2e2'); // red-100
export const VINE_TOMATOES_IMG = createPlaceholder('Vine-Ripened Tomatoes', '#fee2e2'); // red-100
export const SMOKED_CATFISH_IMG = createPlaceholder('Smoked Catfish', '#dcfce7'); // green-100
export const FRESH_ORANGES_IMG = createPlaceholder('Fresh Oranges', '#ffedd5'); // orange-100
export const FRESH_SPINACH_IMG = createPlaceholder('Fresh Efo/Spinach', '#dcfce7'); // green-100
export const PINEAPPLES_IMG = createPlaceholder('Tropical Pineapples', '#fef9c3'); // yellow-100

// --- Blog Images ---
export const BLOG_AGRIBUSINESS_IMG = createPlaceholder('Future of Agribusiness', '#cffafe'); // cyan-100
export const BLOG_STRATEGY_IMG = createPlaceholder('Corporate Strategy', '#e0e7ff'); // indigo-100
export const BLOG_SUSTAINABILITY_IMG = createPlaceholder('Sustainability in Practice', '#d1fae5'); // green-100
