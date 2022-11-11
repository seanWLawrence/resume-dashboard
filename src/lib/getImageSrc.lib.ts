export const getImageSrc = (fileName: string): string => {
  return new URL(fileName, import.meta.url).href;
};
