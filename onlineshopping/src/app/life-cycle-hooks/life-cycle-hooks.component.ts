import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements OnInit {

  @Input() message: string ="";

  constructor() { }

  ngOnInit() {
  }

}
