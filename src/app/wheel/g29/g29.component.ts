import { Component, OnInit } from '@angular/core';
import { LoopService } from 'src/app/loop.service';
import { ButtonsG29 } from '../buttons.class';

@Component({
  selector: 'app-g29',
  templateUrl: './g29.component.html',
  styleUrls: ['./g29.component.scss']
})
export class G29Component implements OnInit {

  type: string = '';

  classWheel: any = {};

  buttons: ButtonsG29 = new ButtonsG29();

  constructor(public loop: LoopService) {}

  ngOnInit(): void {
    this.type = this.loop.typeWheel;
    this.loop.deviceData.subscribe(x => {
      this.buttons.update(x.buttons);
      for (const key in x.dPad) {
        if (Object.prototype.hasOwnProperty.call(x.dPad, key)) {
          this.classWheel[`d-pad-${key}`] = x.dPad[key];
        }
      }
      for (const key in this.buttons) {
        if (Object.prototype.hasOwnProperty.call(this.buttons, key)) {
          this.classWheel[`b-${key}`] = this.buttons[key].value;
        }
      }
    });
  }

}
