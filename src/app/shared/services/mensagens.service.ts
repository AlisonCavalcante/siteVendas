import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagensService {

  mensagem: string = '';

  constructor() { }

  addMensagem(mensagem: string){
    this.mensagem = mensagem;
    setTimeout(()=>{
      this.clearMensagem();
    },4000)
  }
  clearMensagem(){
  this.mensagem = '';
  }
}
