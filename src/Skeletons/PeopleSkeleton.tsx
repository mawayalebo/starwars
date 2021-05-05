import styled from 'styled-components'

import PersonSkeleton from "./PersonSkeleton";
const PeopleSkeleton : React.FC = () => {
  return (
    <SkeletonContainer>
      <PersonSkeleton />
      <PersonSkeleton />
      <PersonSkeleton />
      <PersonSkeleton />
      <PersonSkeleton />
    </SkeletonContainer>
   );
}

export const SkeletonContainer = styled.div`
  padding: 20px;
`;

export default PeopleSkeleton;