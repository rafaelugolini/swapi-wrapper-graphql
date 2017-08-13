import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';

const typeDefs = `
type Person {
  name: String
  height: String
  mass: String
  hair_color: String
  skin_color: String
  eye_color: String
  birth_year: String
  gender: String
  homeworld: Planet
  films: [Film]
  species: [Specie]
  vehicles: [Vehicle]
  starships: [Starship]
  url: String
  created: String
  edited: String
}
type Film {
  title: String
  director: String
  title: String
  episode_id: Int
  opening_crawl: String
  director: String
  producer: String
  release_date: String
  characters: [Person]
  planets: [Planet]
  starships: [Starship]
  vehicles: [Vehicle]
  species: [Specie]
  url: String
  created: String
  edite: String
}
type Starship {
  name: String
  model: String
  manufacturer: String
  cost_in_credits: String
  length: String
  max_atmosphering_speed: String
  crew: String
  passengers: String
  cargo_capacity: String
  consumables: String
  hyperdrive_rating: String
  MGLT: String
  starship_class: String
  pilots: [Person]
  films: [Film]
  created: String
  edited: String
  url: String
}
type Vehicle {
  name: String
  model: String
  manufacturer: String
  cost_in_credits: String
  length: String
  max_atmosphering_speed: String
  crew: String
  passengers: String
  cargo_capacity: String
  consumables: String
  vehicle_class: String
  pilots: [Person]
  films: [Film]
  created: String
  edited: String
  url: String
}
type Specie {
  name: String
  classification: String
  designation: String
  average_height: String
  average_lifespan: String
  hair_colors: String
  skin_colors: String
  eye_colors: String
  homeworld: Planet
  language: String
  people: [Person]
  films: [Film]
  url: String
  created: String
  edited: String
}
type Planet {
  name: String
  rotation_period: String
  orbital_period: String
  diameter: String
  climate: String
  gravity: String
  terrain: String
  surface_water: String
  population: String
  residents: [Person]
  films: [Film]
  created: String
  edited: String
  url: String
}
type Query {
  getPeople(search: String): [Person]
  getAllPeople(search: String): [Person]
  getPersonById(id: Int!): Person
  getFilms(search: String): [Film]
  getFilmById(id: Int!): [Film]
  getStarships(search: String): [Starship]
  getStarshipById(id: Int!): Starship
  getVehicles(search: String): [Vehicle]
  getVehicleById(id: Int!): Vehicle
  getSpecies(search: String): [Specie]
  getSpecieById(id: Int!): Specie
  getPlanets(search: String): [Planet]
  getPlanetById(id: Int!): Planet
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
