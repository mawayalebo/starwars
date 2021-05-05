import { RESTDataSource } from "apollo-datasource-rest";


class StarwarsAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = "https://swapi.dev/api";
  }

  async getPeopleByPage(page: BigInteger){
    const response = await this.get(`people/?page=${page}`);
    return response.results.map((person: any) => {
      return this.PersonReducer(person);
    })

  }

  async getPeopleByName(name: string){
    const response = await this.get(`people/?search=${name}`);
    return response.results.map((person: any) => {
      return this.PersonReducer(person);
    })

  }

  async getHomeWorld(url: string) {
    const response = await this.get(url);
    return this.HomeWorldReducer(response);
  }

  //reducers
  PersonReducer = ({ name, gender, height, mass, homeworld }: any):any => {
    return {
      name,
      gender,
      height,
      mass,
      homeworld
    }
  }

  HomeWorldReducer = ({ name, terrain, population }: any) => {
    return {
      name,
      terrain,
      population
    }
  }

}

export = StarwarsAPI;