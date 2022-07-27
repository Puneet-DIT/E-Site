import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  images: carouselImage[] = [
    { imageAlt: '#1', imageSrc: './../../../assets/1.jpg' },
    { imageAlt: '#2', imageSrc: './../../../assets/2.jpeg' },
    { imageAlt: '#3', imageSrc: './../../../assets/3.png' },
  ];
  selectedIndex = 0;

  homeProducts = [0,1,2,3]

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.autoSlide();
  }

  autoSlide(){
    setInterval(() => {
      if(this.selectedIndex == this.images.length-1){
        this.selectedIndex = 0;
      }
      else{
        this.selectedIndex++;
      }
    }, 5000);
  }

  selectImage(i: number){
    this.selectedIndex = i;
  }

  prevImage(){
    if(this.selectedIndex == 0){
      this.selectedIndex = this.images.length-1;
    }
    else{
      this.selectedIndex--;
    }
  }

  nextImage(){
    if(this.selectedIndex == this.images.length-1){
      this.selectedIndex = 0;
    }
    else{
      this.selectedIndex++;
    }
  }

  OpenCatalogue(){
    this.router.navigate(["./catalogue"]);
  }

}
