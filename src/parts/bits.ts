export function readBit(value: number, index: number) {
    if (!((value & (1 << (index))) === 0)) {
        return 1
    }
    return 0
}