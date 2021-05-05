import styled from "styled-components";
 
const AppBodyBottom: React.FC = () => {
  return (
    <BottomContainer className="body_bottom">
      {
        
      }
    </BottomContainer>
  );
}
const BottomContainer = styled.div`
  display: flex;
  background-color: rgba(155, 155, 155, 0.3);
  justify-content: ${"space-evenly"}
 `
export default AppBodyBottom;