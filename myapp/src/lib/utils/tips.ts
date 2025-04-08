export function validateAmount(amount: number | null , index: number): boolean {
    if (amount == null) {
        return true;
    }
    let cashAmount: string[] = amount.toString().split('.');
    if (cashAmount.length == 1 || cashAmount.length == 2 && cashAmount[1].length <= 2) {
        return true;
    }
    return false;
}

export function calculateTotal(cash: (number | null)[], credit: (number | null)[]): string {
    let total: number = 0;
    for (let i = 0; i < 7; ++i) {
        let cashAmount: number = cash[i] ?? 0;
        let creditAmount: number = credit[i] ?? 0;
        total += (cashAmount * 100) + (creditAmount * 100);
    }
    total = (Math.round(total) / 100);
    return total.toFixed(2);
}