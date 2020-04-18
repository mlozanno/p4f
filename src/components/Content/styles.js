import styled from 'styled-components';

export const StyledContent = styled.section`
  margin: ${({ theme }) => theme.metric(2, 'auto', 2)};
  padding: ${({ theme }) => theme.metric(0, 2)};
  color: #333;
  width: calc(100% - ${({ theme }) => theme.metric(4)});
`;
