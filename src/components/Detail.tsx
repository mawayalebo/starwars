
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
                  <div className="row">
                    <NameContainer className="col s10 m5 l4">
                      <p>{person.name}</p>
                    </NameContainer>
                  </div>
                  <div className="carousel">
                    <a href="" className="carousel-item">
                    <div className="white"><h1>hello</h1></div>
                    </a>
                    <a href="" className="carousel-item">
                    <div className="white"><h1>hello</h1></div>
                    </a>
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