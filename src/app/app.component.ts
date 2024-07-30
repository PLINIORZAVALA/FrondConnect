import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Solo componentes, directivas o pipes aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corregido a styleUrls
})


export class AppComponent implements OnInit {

  public data: any;

  // Inyección de servicio en el constructor
  constructor(private API: ProductService) {}

  ngOnInit(): void {
    // Llamada al servicio para obtener productos
    this.API.getProducts().subscribe(
      response => {
        this.data = response;
        console.log(this.data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
