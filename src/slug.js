const SEPARATORS = /[\s_-]+/g;

/**
 * Normalises a human-readable string into a URL slug.
 *
 * Runs of whitespace, dashes, and underscores collapse to a single dash, and
 * the result never starts or ends with one.
 *
 * @param {string} input
 * @returns {string} possibly empty when the input is only separators
 */
export function slugify(input) {
  return String(input)
    .trim()
    .replace(SEPARATORS, "-")
    .toLowerCase()
    .replace(/^-+|-+$/g, "");
}
