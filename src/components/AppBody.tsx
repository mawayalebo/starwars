import styled from "styled-components";
import AppBodyMiddle from "./AppBodyMiddle";
//import { Search } from "@material-ui/icons";
export interface AppBodyProps {
  
}
 
const AppBody: React.SFC<AppBodyProps> = () => {
  return (
    <div className="app_body container">
      <AppBodyTop>
        <SearchContainer>
          <input type="search" name="search" id="search" placeholder=" Example: Skywalker"/>
          <i className="material-icons">search</i>
        </SearchContainer>
      </AppBodyTop>
      <AppBodyMiddle/>
    </div> );
}

const AppBodyTop = styled.div`
    margin-top: 40px;
`
const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 20px;
    background-color: rgba( 155, 155, 155, 0.3);
    width: 100%;
    padding: 0 30px 0 30px;
    > input{
      outline: none !important;
      border-bottom: none !important ;
      color: white;
      :focus{
        box-shadow: none !important;
      }
    }
`

export default AppBody;