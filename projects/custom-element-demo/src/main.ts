import {enableProdMode} from '@angular/core';
import {environment} from './environments/environment';
import {SliderElement} from './app/slider.element';

if (environment.production) {
  enableProdMode();
}

customElements.define('my-slider-element', SliderElement);
