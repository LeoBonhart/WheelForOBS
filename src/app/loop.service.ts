import { Inject, Injectable } from '@angular/core';
import {  Subject } from 'rxjs';
import { DPad } from './wheel/buttons.class';

interface IDeviceData {
  /** Угол руля */
  wheel: number;
  /** Газ */
  throttle: number;
  /** Сцепление */
  clutch: number;
  /** Тормоз */
  brake: number;
  /** Кнопки */
  buttons: Array<GamepadButton>;
  /** D-Pad */
  dPad: DPad;
}

@Injectable({
  providedIn: 'root'
})
export class LoopService {

  axisIndexWheel     = 0;
  axisIndexBrake     = 5;
  axisIndexThrottle  = 2;
  axisIndexClutch    = 1;
  axisIndexDPad      = 9;

  public get regular(): RegExp {
    return new RegExp(`${this.typeWheel}.*wheel`, 'i');
  }

  private _wheeRotation  = 900;
  public get wheeRotation(): number {
    return this._wheeRotation / 2;
  }
  public set wheeRotation(v: number) {
    this._wheeRotation = v;
  };

  public get wheelDevice(): Gamepad | null {
    let gps = navigator.getGamepads();
    for(let gp of gps) {
        if (gp && gp.id.match(this.regular)) {
            return gp;
        }
    }
    return null;
  }


  deviceData: Subject<IDeviceData> = new Subject<IDeviceData>();

  readonly imageSrc: string = 'assets/images/';

  constructor(@Inject('WHEEL_TYPE') public typeWheel: string) {
    var timer = setInterval(() => {
      if (this.wheelDevice) {
        this.gameLoop();
        clearInterval(timer);
      }
    }, 10);
  }

  getImage(name: string): string {
    return this.imageSrc + name;
  }

  private gameLoop() {
    const device = this.wheelDevice as Gamepad;
    let wheel = Math.round(this.wheeRotation * device.axes[this.axisIndexWheel] * 1000) / 1000;
    let throttle = this.pedalNormalize(device.axes[this.axisIndexThrottle]);
    let brake = this.pedalNormalize(device.axes[this.axisIndexBrake]);
    let clutch = this.pedalNormalize(device.axes[this.axisIndexClutch]);
    let buttons = device.buttons.map(x => x);
    let dPad: DPad = new DPad(device.axes[this.axisIndexDPad]);
    this.deviceData.next({wheel, brake, clutch, throttle, buttons, dPad});
    requestAnimationFrame(() => {
      this.gameLoop();
    });
  }

  private pedalNormalize(value: number): number {
    return (value * -1 + 1) / 2
  }
}
