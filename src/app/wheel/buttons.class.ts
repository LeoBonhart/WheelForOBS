interface IButton {
  readonly text: string;
  value?: boolean;
}

export class DPad {
  up: boolean = false;
  down: boolean = false;
  left: boolean = false;
  right: boolean = false;

  constructor(data: number) {
    const axis = +data.toFixed(2);
    if (axis === 0.71 || axis === 1 || axis === 0.43) {
      this.left = true;
    }
    if (axis === -1 || axis === 1 || axis === -0.71) {
      this.up = true;
    }
    if (axis === -0.43 || axis === -0.71 || axis === -0.14) {
      this.right = true;
    }
    if (axis === 0.14 || axis === -0.14 || axis === 0.43) {
      this.down = true;
    }
  }
}

export class Buttons extends Array<IButton> {

  constructor(...data: Array<IButton>) {
    super(...data);
  }

  update(data?: Array<GamepadButton>) {
    if (data) {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          this[key].value = data[key].pressed;
        }
      }
    }
  }

}

interface IButtonsG29<T> {
  0: T;
  1: T;
  2: T;
  3: T;
  4: T;
  5: T;
  6: T;
  7: T;
  8: T;
  9: T;
  10: T;
  11: T;
  12: T;
  13: T;
  14: T;
  15: T;
  16: T;
  17: T;
  18: T;
  19: T;
  20: T;
  21: T;
  22: T;
  23: T;
  24: T;
}

export class ButtonsG29 extends Buttons implements IButtonsG29<IButton> {
  0: IButton = { text: '✖' };
  1: IButton = { text: '◻' };
  2: IButton = { text: '〇' };
  3: IButton = { text: '△' };
  4: IButton = { text: 'Right paddle shifter' };
  5: IButton = { text: 'Left paddle shifte' };
  6: IButton = { text: 'R2' };
  7: IButton = { text: 'L2' };
  8: IButton = { text: 'SHARE' };
  9: IButton = { text: 'OPTION' };
  10: IButton = { text: 'R3' };
  11: IButton = { text: 'L3' };
  12: IButton = { text: '' };
  13: IButton = { text: '' };
  14: IButton = { text: '' };
  15: IButton = { text: '' };
  16: IButton = { text: '' };
  17: IButton = { text: '' };
  18: IButton = { text: '' };
  19: IButton = { text: 'Plus' };
  20: IButton = { text: 'Minus' };
  21: IButton = { text: '⭮' };
  22: IButton = { text: '⭯' };
  23: IButton = { text: '⏎' };
  24: IButton = { text: 'PS' };

  constructor(...data: Array<IButton>) {
    super(...data);
  }

}


