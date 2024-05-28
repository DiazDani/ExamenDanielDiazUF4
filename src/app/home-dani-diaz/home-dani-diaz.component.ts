import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NgForOf, NgIf } from "@angular/common";

interface Pokemon {
  name: string;
  stats: { name: string, base_stat: number }[];
  image: string;
}

@Component({
  selector: 'app-home-dani-diaz',
  standalone: true,
  imports: [
    HttpClientModule,
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './home-dani-diaz.component.html',
  styleUrls: ['./home-dani-diaz.component.css']
})
export class HomeDaniDiazComponent {
  IdPokemon: number = 0;
  pokemon: Pokemon | null = null;

  constructor(private http: HttpClient) {}

  buscarPokemon() {
    this.fetchPokemonData(this.IdPokemon)
      .then((dadesPokemon: any) => {
        this.pokemon = {
          name: dadesPokemon.name,
          stats: dadesPokemon.stats.map((stat: any) => ({
            name: stat.stat.name,
            base_stat: stat.base_stat
          })),
          image: dadesPokemon.sprites.front_default
        };
      })
      .catch((error) => {
        this.pokemon = null;
        console.log(error);
      });
  }

  fetchPokemonData(pokemonId: number) {
    return new Promise((resolve, reject) => {
      this.http
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
        .subscribe(
          (data: any) => {
            const attackStat = data.stats.find((stat: any) => stat.stat.name === 'attack');
            if (attackStat && attackStat.base_stat >= 50) {
              resolve(data);
            } else {
              reject(`Promesa Rebutjada! El Pokémon té menys de 50 d'atac. Atac del Pokémon: ${attackStat.base_stat}`);
            }
          },
          () => {
            reject('Error en obtenir les dades de l\'API.');
          }
        );
    });
  }
}
