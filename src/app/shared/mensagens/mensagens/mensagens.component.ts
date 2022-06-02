import { Component, Input, OnInit } from '@angular/core';
import { MensagensService } from '../../services/mensagens.service';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit {

  constructor(public mensagemService: MensagensService) { }

  ngOnInit(): void {
  }

  close(){
    this.mensagemService.clearMensagem();
  }
}
