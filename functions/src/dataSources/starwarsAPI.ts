import { PersonType, HomeWorldType } from './../@myTypes';
import { RESTDataSource } from "apollo-datasource-rest";

class StarwarsAPI extends RESTDataSource {
  //wrap the starwars api
  constructor() {
    super()
    this.baseURL = "https://swapi.dev/api";
  }

  //getting data
  async getPeopleByPage(page: BigInteger){
    const response = await this.get(`people/?page=${page}`);
    return response.results.map((person: PersonType) => {
      return this.PersonReducer(person);
    })

  }

  async getPeopleByName(name: string){
    const response = await this.get(`people/?search=${name}`);
    console.log(response);
    return response.results.map((person: PersonType) => {
      return this.PersonReducer(person);
    })

  }

  async getHomeWorld(url: string) {
    const response = await this.get(url);
    return this.HomeWorldReducer(response);
  }

  //reducers
  PersonReducer = ({ name, gender, height, mass, homeworld }: PersonType): PersonType => {
    return {
      name,
      gender,
      height,
      mass,
      homeworld
    }
  }

  HomeWorldReducer = ({ name, terrain, population }: HomeWorldType): HomeWorldType => {
    return {
      name,
      terrain,
      population
    }
  }

}

export = StarwarsAPI;