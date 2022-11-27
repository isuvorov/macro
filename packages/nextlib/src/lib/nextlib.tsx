import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface NextlibProps {}

const StyledNextlib = styled.div`
  color: pink;
`;

export function Nextlib(props: NextlibProps) {
  return (
    <StyledNextlib>
      <h1>Welcome to Nextlib!</h1>
    </StyledNextlib>
  );
}

export default Nextlib;
