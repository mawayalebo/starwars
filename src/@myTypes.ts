//custom types

export type PersonType = {
  name: string,
  gender: string,
  height: string,
  mass: string,
  homeworld: (string | HomeWorldType)
}

export type HomeWorldType = {
  name: string,
  population: string,
  terrain: string
}

export type PersonArgumentsType = {
  page?: BigInteger,
  name?: String
}

