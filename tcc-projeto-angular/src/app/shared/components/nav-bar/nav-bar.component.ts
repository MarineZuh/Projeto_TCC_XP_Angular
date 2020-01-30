import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  items: {nome: string, link: string}[] = [
    {nome: 'Professor', link: 'cadastros/professor'},
    {nome: 'Aluno', link: 'cadastros/aluno'},
    {nome: 'Projeto Monográfico', link: 'cadastros/projeto'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
