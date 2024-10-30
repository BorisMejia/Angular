import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
  imports: [CommonModule],
})
export class LabsComponent {
  welcome = 'Bienvenido a Angular';
  task = [
    'Instalar Angular',
    'crear nuevo proyecto',
    'crear nuevo componente'
  ]
}
