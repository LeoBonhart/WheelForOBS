import { Component, OnInit } from '@angular/core';
import { LoopService } from '../loop.service';
import { Pedals } from '../pedals/pedals.class';
import { ButtonsG29, DPad } from '../wheel/buttons.class';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss']
})
export class DebugComponent implements OnInit {

  type: string = '';

  pedals: Pedals = new Pedals({
    brake: 1,
    clutch: 1,
    throttle: 1
  });

  wheel: number = 0;

  buttons: ButtonsG29 = new ButtonsG29();

  dPad: DPad;

  constructor(public loop: LoopService) {}

  ngOnInit(): void {
    this.type = this.loop.typeWheel;
    this.loop.deviceData.subscribe(x => {
      this.wheel = x.wheel;
      this.pedals.brake = 1 - x.brake;
      this.pedals.clutch = 1 - x.clutch;
      this.pedals.throttle = 1 - x.throttle;
      this.buttons.update(x.buttons);
      this.dPad = x.dPad;
    });
  }

}
