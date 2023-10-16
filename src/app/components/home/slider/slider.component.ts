import { Component } from '@angular/core';
import { Slider } from 'src/app/interfaces/slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  slider: Slider[] = [
    {
      slideUrl: './assets/img/slajd1.png',
      alt: 'string',
      title: 'Check our new brands',
      path: 'New in',
    },
    {
      slideUrl: './assets/img/slajd2.png',
      alt: 'string',
      title: 'Check latest hot sales',
      path: 'Sale',
    },
    {
      slideUrl: './assets/img/slajd3.png',
      alt: 'string',
      title: 'Everything for women',
      path: 'Women',
    },
  ];

  slideBackground: string = '';

  count = 0;
  arg = 0;
  animation = '';

  changeSlide(arg: number) {
    this.count = this.count + arg;
    this.arg = arg;
    if (this.count >= this.slider.length) {
      this.count = 0;
    }
    if (this.count < 0) {
      this.count = this.slider.length - 1;
    }
    if (arg === +1) {
      this.animation = "background-slide-next"
      if (this.count === 0) {
        this.slideBackground = this.slider[this.slider.length-1].slideUrl;
      } else {
        this.slideBackground = this.slider[this.count - 1].slideUrl;
      }
    }
    if (arg === -1) {
      this.animation = "background-slide-prev";
      if (this.count === this.slider.length-1) {
        this.slideBackground = this.slider[0].slideUrl;
      } else {
        this.slideBackground = this.slider[this.count + 1].slideUrl;
      }
    }
  }
  changeSlideByPagination(param: number) {
    this.count = param;
  }
}
