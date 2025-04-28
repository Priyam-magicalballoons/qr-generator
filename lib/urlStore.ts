const urlMap = new Map<string, string>();

export function saveUrl(id: string, url: string) {
  urlMap.set(id, url);
}

export function getUrl(id: string): string | undefined {
  return urlMap.get(id);
}
