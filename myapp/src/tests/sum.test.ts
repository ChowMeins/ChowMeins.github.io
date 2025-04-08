import {describe, it, expect, test} from 'vitest';
import { validateAmount, calculateTotal } from '$lib/utils/tips';

describe('Calculate Sum', () => {
    test('Test #1', () => {
        const cash = [8.35, 10.76, 15.25, 11.29, 15.15, 36.20, 4.81];
        const credit = [86.24, 48.19, 70.49, 97.16, 88.09, 154.04, 127.66];
        expect(calculateTotal(cash, credit)).toBe('773.68');
    })

    test('Handles arrays with zeroes', () => {
        const cash = [0, 0, 0, 0, 0, 0, 0];
        const credit = [0, 0, 0, 0, 0, 0, 0];
        expect(calculateTotal(cash, credit)).toBe('0.00');
    });

    test('Handles empty arrays', () => {
        expect(calculateTotal([], [])).toBe('0.00');
    });

    test('handles null or undefined entries', () => {
        const cash = [8.35, null, 15.25, null, 15.15, 36.20, 4.81];
        const credit = [86.24, 48.19, null, 97.16, null, 154.04, 127.66];
        expect(calculateTotal(cash, credit)).toBe('593.05'); // Example expected value
    });
})