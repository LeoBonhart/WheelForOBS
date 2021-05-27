interface IPedals {
  /** Газ */
  throttle: number;
  /** Сцепление */
  clutch: number;
  /** Тормоз */
  brake: number;
}
export class Pedals implements IPedals{
  /** Газ */
  private _throttle: number = 0
  /** Газ */
  public set throttle(v: any) {
    this._throttle = parseFloat(v);
  }
  /** Газ */
  public get throttle(): any {
    return (100 - this._throttle * 100)+'%';
  };
  /** Сцепление */
  private _clutch: number = 0
  /** Сцепление */
  public set clutch(v: any) {
    this._clutch = parseFloat(v);
  }
  /** Сцепление */
  public get clutch(): any {
    return (100 - this._clutch * 100)+'%';
  };
  /** Тормоз */
  private _brake: number = 0
  /** Тормоз */
  public set brake(v: any) {
    this._brake = parseFloat(v);
  }
  /** Тормоз */
  public get brake(): any {
    return (100 - this._brake * 100)+'%';
  };

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
