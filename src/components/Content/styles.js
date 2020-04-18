import styled from 'styled-components';

export const StyledContent = styled.section`
  margin: ${({ theme }) => theme.metric(2, 'auto', 2)};
  padding: ${({ theme }) => theme.metric(0, 2)};
  color: #333;
  border-radius: 0.6rem;
  padding: ${({ theme }) => theme.metric(2)};
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.16);
  width: calc(100% - ${({ theme }) => theme.metric(4)});
  background-color: #fff;
`;
