import { Skeleton } from "@material-ui/lab";
import styled from "styled-components";
const PersonSkeleton : React.FC = () => {
  return (
    <SkeletonContainer>
      <Skeleton variant="rect" height={200} animation="wave" />
    </SkeletonContainer>
   );
}

export const SkeletonContainer = styled.div`
 background-color:  rgba(20,20,20,0.5);
 margin: 10px;
 border-radius: 20px;
`;
export default PersonSkeleton;