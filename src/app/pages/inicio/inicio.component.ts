import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent{

  clientes: number=1000;
  ventas: number=0;
  servicios:number=0;
  anos:number=0;

  constructor() { }

  

  contador1: any = setInterval( () => {

    this.clientes+=500;

    if(this.clientes == 40000) {
        clearInterval(this.contador1);
    }
  },40);


  
  contador2: any = setInterval( () => {
  
    this.ventas+=20;

    if(this.ventas == 1800) {
        clearInterval(this.contador2);
    }
  }, 40);


  contador3: any = setInterval( () => {
  
    this.servicios++;

    if(this.servicios == 100) {
        clearInterval(this.contador3);
    }
  }, 40); 


 contador4: any = setInterval( () => {
  
    this.anos++;

    if(this.anos == 20) {
        clearInterval(this.contador4);
    }
  }, 200)


  closeBtnModal(): void {
    const productsModel = document.querySelectorAll(".product-modal");
    const learMoreBtns = document.querySelectorAll(".learn-more-btn");
    const productsCloseBtn = document.querySelectorAll(".modal-close-btn");

    var productModal:any = function (modalclick:any) {
        productsModel[modalclick].classList.add('active');
    }

    learMoreBtns.forEach((learMoreBtn, i) => {
        learMoreBtn.addEventListener("click", () => {
          productModal(i);
        });
    });

    productsCloseBtn.forEach((modalCloseBtn) => {
      modalCloseBtn.addEventListener("click", () =>{
        productsModel.forEach((ModelView) => {
          ModelView.classList.remove("active");
        });
      });
    });
  }

}
