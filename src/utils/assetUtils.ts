export function getAssetPath(path: string) {
  return new URL(path, import.meta.url).href
}
