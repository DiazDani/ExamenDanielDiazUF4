import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgForOf, NgIf } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";

interface Pokemon {
  name: string;
  abilities: { name: string, description: string }[];
}

@Component({
  selector: 'app-habilitats-dani-diaz',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    HttpClientModule
  ],
  templateUrl: './habilitats-dani-diaz.component.html',
  styleUrls: ['./habilitats-dani-diaz.component.css']
})
export class HabilitatsDaniDiazComponent {
  IdPokemon: number = 0;
  pokemon: Pokemon | null = null;

  constructor(private http: HttpClient) {}

  buscarPokemon() {
    this.fetchPokemonData(this.IdPokemon)
      .then((dadesPokemon: any) => {
        const abilitiesPromises = dadesPokemon.abilities.map((abilityInfo: any) =>
          this.fetchAbilityDescription(abilityInfo.ability.url).then((description: string) => ({
            name: abilityInfo.ability.name,
            description: description
          }))
        );

        Promise.all(abilitiesPromises).then((abilities) => {
          this.pokemon = {
            name: dadesPokemon.name,
            abilities: abilities
          };
        });
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
            resolve(data);
          },
          () => {
            reject('Error en obtenir les dades de l\'API.');
          }
        );
    });
  }

  fetchAbilityDescription(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(
        (data: any) => {
          const descriptionEntry = data.effect_entries.find((entry: any) => entry.language.name === 'en');
          resolve(descriptionEntry ? descriptionEntry.effect : 'No description available.');
        },
        () => {
          reject('Error en obtenir la descripció de l\'habilitat.');
        }
      );
    });
  }
}
