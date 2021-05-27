import { Component, OnInit } from '@angular/core';
import { LoopService } from '../loop.service';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.scss']
})
export class WheelComponent implements OnInit {

  type: string = '';

  private _wheel: number = 0
  public set wheel(v: any) {
    this._wheel = parseFloat(v);
  }
  public get wheel(): any {
    return `rotate(${this._wheel}deg)`;
  }

  constructor(public loop: LoopService) {}

  ngOnInit(): void {
    this.type = this.loop.typeWheel;
    this.loop.deviceData.subscribe(x => {
      this.wheel = x.wheel;
    });
  }

}
