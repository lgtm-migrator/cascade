export function getCLIArgs(rawArgs: string[]): string[] {
    return rawArgs.slice(2)
}