interface IPedals {
  /** Газ */
  throttle: number;
  /** Сцепление */
  clutch: number;
  /** Тормоз */
  brake: number;
}
export class Pedals implements IPedals{

  private readonly percentForza4 = (470 - 282.743) / 100;

  /** Газ */
  private _throttle: number = 0
  /** Газ */
  public set throttle(v: any) {
    this._throttle = parseFloat(v);
  }
  /** Газ */
  public get throttle(): any {
    return this.getPercent(this._throttle)+'%';
  };
  /** Газ */
  public get throttleForza4(): any {
    return this.getPercentForza4(this._throttle)+'px';
  };
  /** Сцепление */
  private _clutch: number = 0
  /** Сцепление */
  public set clutch(v: any) {
    this._clutch = parseFloat(v);
  }
  /** Сцепление */
  public get clutch(): any {
    return this.getPercent(this._clutch)+'%';
  };
  /** Сцепление */
  public get clutchForza4(): any {
    return this.getPercentForza4(this._clutch)+'px';
  };
  /** Тормоз */
  private _brake: number = 0
  /** Тормоз */
  public set brake(v: any) {
    this._brake = parseFloat(v);
  }
  /** Тормоз */
  public get brake(): any {
    return this.getPercent(this._brake)+'%';
  };
  /** Тормоз */
  public get brakeForza4(): any {
    return this.getPercentForza4(this._brake)+'px';
  };

  private getPercent(v: number): number {
    return (100 - v * 100);
  }

  private getPercentForza4(v: number): number {
    return 282.743 + v * 100 * this.percentForza4;
  }

  constructor(data?: IPedals) {
    if (data) {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          this[key] = data[key];
        }
      }
    }
  }
}
