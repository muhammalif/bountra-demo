export function slugify(input) {
  return String(input)
    .trim()
    .toLowerCase()
    .replace(/[\s_-]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}
