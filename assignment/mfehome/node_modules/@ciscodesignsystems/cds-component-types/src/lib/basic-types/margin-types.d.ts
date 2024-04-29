export type MarginNumbers = [0, 2, 4, 8, 12, 16, 24, 36, 48, 'auto'];
export type MarginNumber = MarginNumbers[number];
export type MarginObject = {
    bottom?: MarginNumber;
    left?: MarginNumber;
    right?: MarginNumber;
    top?: MarginNumber;
};
export type Margin = MarginNumber | [MarginNumber] | [MarginNumber, MarginNumber] | [MarginNumber, MarginNumber, MarginNumber] | [MarginNumber, MarginNumber, MarginNumber, MarginNumber] | MarginObject | undefined;
