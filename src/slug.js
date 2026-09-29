const SEPARATORS = /[\s_-]+/g;

/**
 * Normalises a human-readable string into a URL slug.
 *
 * @param {string} input
 * @returns {string} possibly empty, never leading or trailing separator
 */
export function slugify(input) {
  return String(input)
    .trim()
    .replace(SEPARATORS, "-")
    .toLowerCase()
    .replace(/^-+|-+$/g, "");
}
