/**
 * Trim text to a specified length and add ellipsis if text is longer than length parameter
 * @param text 
 * @param length 
 * @returns Trimmed text with ellipsis if text is longer than length parameter
 */
export function trimText(text: string, length: number): string {
  if (text.length > length) {
    return text.substring(0, length-3) + '...';
  }
  return text;
}
