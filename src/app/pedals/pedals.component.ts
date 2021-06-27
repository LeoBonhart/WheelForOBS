import { Component, Inject, OnInit } from '@angular/core';
import { TPedalsStyle } from 'src/main';
import { LoopService } from '../loop.service';
import { Pedals } from './pedals.class';

@Component({
  selector: 'app-pedals',
  templateUrl: './pedals.component.html',
  styleUrls: ['./pedals.component.scss']
})
export class PedalsComponent implements OnInit {

  pedals: Pedals = new Pedals();

  constructor(private loop: LoopService, @Inject('PEDALS_STYLE') public pedalsStyle: TPedalsStyle) { }

  ngOnInit(): void {
    this.loop.deviceData.subscribe(x => {
      this.pedals.throttle = x.throttle;
      this.pedals.clutch = x.clutch;
      this.pedals.brake = x.brake;
    });
  }

}
