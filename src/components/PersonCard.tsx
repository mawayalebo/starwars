import styled from "styled-components";

const PersonCard: React.FC<any> = ({person, key}) => {

  return (
    <CardContainer key={key} id={person.name} className="card" >
      <CardContent className="card-content">
        <h3 className="card-title activator">{ person.name }</h3>
        <i className="material-icons small white-text right activator">arrow_upward</i>
      </CardContent>
      <CardReveal className="card-reveal">
        <h1 className="card-title">{person.name}<i className="material-icons white-text small right">close</i></h1>
        <p>Gender:  {person.gender}</p>
        <p>Mass:  {person.mass}</p>
        <p>Height:  {person.height}</p>
        <hr/>
        <p>Home World</p>
        <p>{person.homeworld.name }</p>
      </CardReveal>
    </CardContainer>
   );
}
const CardContainer = styled.div`
 background-color: rgba( 22, 22, 22, 0.7);
 color: rgba( 200, 200, 200);
 margin: 10px;
 border-radius: 20px;
 padding: 10px;
 overflow: hidden !important;
 > i {
   cursor: pointer;
 }

 `
 const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${"space-between"};

 `
const CardReveal = styled.div`
   background-color: rgba( 10, 10, 10) !important;
   margin-top: 0px !important;
 `
export default PersonCard;