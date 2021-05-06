import { Context } from 'vm';
import { PersonType, HomeWorldType, PersonArgumentsType } from './@myTypes';

//resolvers
export = {
  //parent child relationship
  Person: {
    homeworld: ({ homeworld }: PersonType, __: any, { dataSources }: Context): HomeWorldType => {
      return dataSources.starwarsAPI.getHomeWorld(homeworld);
    }
  },
  //root queries
  Query:{
    peopleByPage:(_: any, { page }: PersonArgumentsType, { dataSources }: Context): PersonType => {
      return dataSources.starwarsAPI.getPeopleByPage(page);
    },
    peopleByName:(_: any, { name }: PersonArgumentsType, { dataSources }: Context): PersonType => {
      return dataSources.starwarsAPI.getPeopleByName(name);
    },

  }
}

