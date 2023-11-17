import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import Swiper from 'swiper';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;


  image = [
    'assets/slide1.jpg',
    'assets/slide2.jpg',
    'assets/slide3.jpg',
  ]

  constructor() { }

  ngOnInit() {}

  swiperReady(){
    this.swiper=this.swiperRef?.nativeElement.swiper;
  }

  swiperSlideChanged(e:any){
    console.log('changed',e);
  }

}
