import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-alterar-email',
  templateUrl: './dialog-alterar-email.component.html',
  styleUrls: ['./dialog-alterar-email.component.css']
})
export class DialogAlterarEmailComponent implements OnInit {

  data = {
    email: '',
    email_confirm: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
