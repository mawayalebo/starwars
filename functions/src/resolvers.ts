//resolvers
export = {
  //parent child relationship
  Person: {
    homeworld: ({ homeworld }: any, __: any, { dataSources }: any) => {
      return dataSources.starwarsAPI.getHomeWorld(homeworld);
    }
  },
  //root queries
  Query:{
    peopleByPage:(_: any, { page }: any, { dataSources }: any)=>{
      return dataSources.starwarsAPI.getPeopleByPage(page);
    },
    peopleByName:(_: any, { name }: any, { dataSources }: any)=>{
      return dataSources.starwarsAPI.getPeopleByName(name);
    },

  }
}

