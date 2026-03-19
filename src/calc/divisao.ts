export function divisao (a: number, b: number): number {
    if (b === 0) {
        throw new Error("Divisão por zero");
    } else {
        return a / b;
    }
}