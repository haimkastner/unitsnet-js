/**
 * Format string to a camel case.
 * @param str The pascal case string to format.
 * @returns The string in the camel case format.
 */
export function pascalToCamelCase(str: string): string {
    if (!str)
        return str;
    if (str.length === 1)
        return str.toLowerCase();
    return str[0].toLowerCase() + str.slice(1);
}