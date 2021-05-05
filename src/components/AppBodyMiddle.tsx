import styled from "styled-components";
import PersonCard from "./PersonCard";


const AppBodyMiddle: React.FC = () => {
  return (
    <BodyContainer  >
      <PersonCard />
      <PersonCard />
      <PersonCard />
      <PersonCard />
      <PersonCard/>
      <PersonCard/>
      <PersonCard />
      <PersonCard/>
    </BodyContainer>
   );
}
const BodyContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: ${"space-evenly"};
  flex-flow: row wrap;
  margin-top: 40px;
 `
export default AppBodyMiddle;