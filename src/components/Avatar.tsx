import styled from "styled-components";
import male from "../assets/male_avatar.svg";
import female from "../assets/female_avatar.svg";

export interface AvatarProps {
  gender: string,
  name: string
}

const Avatar: React.SFC<AvatarProps> = ({gender, name}) => {
  return (
    <AvatarContainer>
      { gender === "male" &&
        <img src={male} className="resposive-img"/>
      }
      { gender === "female" &&
        <img src={female} className="resposive-img" />
      }
      {
        gender !== "male" && gender !== "female" &&
        <h3>{name.slice(0,1)}</h3>
      }
    </AvatarContainer>
   );
}

const AvatarContainer = styled.div`
  z-index: 10;
  background-color: white;
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: solid 4px grey;
  width: 150px;
  height: 150px;
  position: absolute;
  top: 67%;
  > img {
    object-fit: contain;
    padding: 10px;
    height: 100px;
    width: 100px;
  }
  > h3 {
    margin: 0;
    font-weight: bold;
  }
`;
export default Avatar;