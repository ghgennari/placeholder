import { Component, OnInit } from '@angular/core';
import { DadoService } from '../dado.service';

@Component({
  selector: 'app-dados',
  standalone: false,
  templateUrl: './dados.component.html',
  styleUrl: './dados.component.css'
})
export class DadosComponent implements OnInit {

  dados: any[] = [];

  constructor(private dadoService: DadoService){}

  ngOnInit(): void {
      this.dadoService.getDados().subscribe(
        json => this.dados = json.data.dados
      )
  }

}
