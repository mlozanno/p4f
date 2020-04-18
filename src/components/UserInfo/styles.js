import styled from 'styled-components';

export const StyledUserInfo = styled.div`
  margin: ${({ theme }) => theme.metric(2, 0)};
  > p {
    display: flex;

    svg {
      margin-right: ${({ theme }) => theme.metric(1)};
    }
  }
`;
