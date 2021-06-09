
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import { personName } from "../cache";
import { useState } from "react";
import { Link } from "react-router-dom";
import male from "../assets/male_avatar.svg";
import female from "../assets/female_avatar.svg";
import Avatar from "./Avatar";

const Detail: React.FC = () => {
  const [name, setName] = useState(personName());

  const getPerson = gql`
    query getPeopleByName($name: String!){
      peopleByName(name: $name){
        name
        gender
        mass
        height
        homeworld{
          name
          terrain
          population
        }
      }
    }
  `;
  const chooseAvatar = (gender: string) => {
    if (gender === "male") {
      return male
    }
    else{
      return female
    }
  }
  const { data, loading, error } = useQuery(getPerson, { variables:{name}});
  return (
    <DetailContainer >
      {
        data && data.peopleByName && data.peopleByName.map(
          (person: any) => {
            return (
              <div key={person.name}>
                <DetailTop>
                  <Avatar gender={person.gender} name={person.name} />
                </DetailTop>
                <DetailMiddle>

                  <div className="container black">
                    <div className="container">
                      <h3 className="white-text">
                        Hi, my name is {person.name}.
                        {
                          person.homeworld.name !== "unknown" && <h3>
                            I'm from planet {person.homeworld.name}.
                          </h3>
                        }
                        I have a height of {person.height} Centimeters and a mass of {person.mass} Kilograms.
                        {
                          person.gender == "female"  || person.gender == "male" &&
                          <h3>Im a {person.gender} STARWARS character.</h3>
                        }
                        {
                          person.gender === "n/a"  &&
                          <h3>Im a STARWARS character.</h3>
                        }
                        {
                          person.homeworld.name !== "unknown" ? (
                            <h3>
                              My home world ground is mostly made of {person.homeworld.terrain} and
                               has a population of { person.homeworld.population !=="unknown" && person.homeworld.population } species.
                            </h3>
                          ): (
                            <h3>
                            </h3>
                          )
                        }
                      </h3>
                    </div>
                  </div>
                </DetailMiddle>
              </div>
            )
          }
        )
      }
    </DetailContainer>
   );
}

const DetailContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  margin: 0;
  width: 100vw !important;
`;

const DetailTop = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 200px;
  width: 100vw;
  position: relative;
  background-color: rgba(22, 22, 22, 0.9);
  border-radius: 0 0 150px 150px;
  margin-bottom: 120px;
`;
const DetailMiddle = styled.div`
  width: 100vw;

`;

const NameContainer = styled.div`
  background-color: rgba(22, 22, 22, 0.7);
  display: flex;
  align-items: center;
  padding-left: 20px !important;
  border-radius: 0 20px 20px 0;
  > p {
    font-size: 30px;
    color: grey;
    font-weight: bold;
    margin: 0;
  }
`;

const Characteristics = styled.div`
  background-color: rgba(22,22,22,0.7);
  margin: 20px;
  border-radius: 20px;
`;



export default Detail;