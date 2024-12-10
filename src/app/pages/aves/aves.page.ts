// src/app/pages/aves/aves.page.ts

import { Component, OnInit } from '@angular/core';
import { AvesService } from '../../services/aves.service';
import { Recording } from '../../models/recording.model';  // Importa la interfaz Recording

@Component({
  selector: 'app-aves',
  templateUrl: './aves.page.html',
  styleUrls: ['./aves.page.scss'],
})
export class AvesPage implements OnInit {
  aves: Recording[] = []; // Usa el tipo Recording[] para el arreglo aves

  constructor(private avesService: AvesService) {}

  ngOnInit() {
    this.cargarAves();
  }

  cargarAves() {
    this.avesService.getAves().subscribe({
      next: (data) => {
        this.aves = data;
        console.log(this.aves);  // Verifica la salida en consola
      },
      error: (error) => {
        console.error('Error al cargar las aves:', error.message);
      },
    });
  }
}
