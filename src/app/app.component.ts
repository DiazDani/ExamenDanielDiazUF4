import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeDaniDiazComponent} from "./home-dani-diaz/home-dani-diaz.component";
import {HabilitatsDaniDiazComponent} from "./habilitats-dani-diaz/habilitats-dani-diaz.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeDaniDiazComponent, HabilitatsDaniDiazComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ExamenDanielDiazUF4';
}
