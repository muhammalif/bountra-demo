export function slugify(input) {
  return String(input).trim().replace(/\s+/g, "-").toLowerCase();
}
