import { InMemoryCache , makeVar } from '@apollo/client';

export const page = makeVar(1);
export const personName  = makeVar("walker");

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields:{
        page: {
          read() {
            return page();
          }
        },
        personName: {
          read() {
            return personName();
          }
        }
      }
    }
  }
});