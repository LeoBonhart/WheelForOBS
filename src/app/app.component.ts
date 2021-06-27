import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WheelForOBS';

  constructor(@Inject('SHOW_WHEEL') public showWheel: boolean, @Inject('SHOW_PEDALS') public showPedals: boolean) {}
}
