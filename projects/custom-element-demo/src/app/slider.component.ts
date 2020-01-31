import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'my-slider',
  template: `
      <label class="switch">
          <input type="checkbox" (change)="handleChange()" [checked]="checked">
          <span class="slider round"></span>
      </label>
  `,
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  @Input() checked = false;
  @Output() state = new EventEmitter<boolean>();

  handleChange() {
    this.checked = !this.checked;
    this.state.next(this.checked);
  }
}
