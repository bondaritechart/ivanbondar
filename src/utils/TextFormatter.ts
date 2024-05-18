export class TextFormatter {
  static capitalizeFirstChar(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }
}
