import styled from "styled-components";
import starWarsLogo from "../assets/Star_Wars-Logo.wine.svg";
export interface AppHeaderProps {
  
}
 
const AppHeader: React.SFC<AppHeaderProps> = () => {
  return (
    <div className="app_header">
      <LogoRibbon>
        <img src={starWarsLogo} alt="star wars logo"/>
      </LogoRibbon>
    </div>
   );
}

const LogoRibbon = styled.div`
  background-color: white;
  width: 80px;
  height: 120px;
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 55%);
  position: relative;
  left: 10%;
  display: flex;
  align-items: center;
  > img{
    width: 90px;
    height: 50px;
    object-fit: contain;
    position: relative;
    top: -20%;
  }
`
export default AppHeader;