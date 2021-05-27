import { Component, OnInit } from '@angular/core';
import { LoopService } from 'src/app/loop.service';

@Component({
  selector: 'app-g27',
  templateUrl: './g27.component.html',
  styleUrls: ['./g27.component.scss']
})
export class G27Component implements OnInit {

  type: string = '';

  constructor(public loop: LoopService) {}

  ngOnInit(): void {
  }

}
