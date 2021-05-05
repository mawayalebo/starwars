import styled from 'styled-components'
const AppFooter: React.FC= () => {
  return ( 
    <FooterContainer className="container center">
      <div className="container centre">
        <h4>Lebogang mawaya</h4>
        <p>mawayalebo@gmail.com</p>
      </div>
    </FooterContainer>
   );
}
 
export const FooterContainer = styled.div`
  position: absolute;
  top: 2800px;
  color: white;
`;
export default AppFooter;