export class Organism {
  id: string;
  species: string;

  constructor(id: string, species: string) {
    this.id = id;
    this.species = species;
    // add family or genus? Not sure how the classifications work :)
  }
}
