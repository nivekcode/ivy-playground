import {SliderComponent} from './slider.component';
import {ɵrenderComponent as renderComponent, ɵdetectChanges as detectChanges} from '@angular/core';

export class SliderElement extends HTMLElement {

  private sliderComponent: SliderComponent;

  constructor() {
    super();
    this.sliderComponent = renderComponent(SliderComponent, {host: this});

    this.sliderComponent.stateChange.subscribe(() => {
      this.dispatchEvent(new CustomEvent('state-change'));
    });
  }

  set checked(checked: boolean) {
    this.sliderComponent.checked = checked;
    detectChanges(this.sliderComponent);
  }

}
