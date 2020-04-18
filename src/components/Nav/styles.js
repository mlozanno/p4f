import styled from 'styled-components';

export const StyledNav = styled.nav`
  > ul {
    display: flex;
    margin-bottom: ${({ theme }) => theme.metric(2)};
  }

  li {
    display: flex;
    margin-right: ${({ theme }) => theme.metric(3)};
  }

  svg {
    margin-right: ${({ theme }) => theme.metric(1)};
    font-size: ${({ theme }) => theme.metric(3)};
  }

  a {
    color: ${({ theme }) => theme.colors.blue};
    transition: color 0.2s linear;
    font-size: ${({ theme }) => theme.metric(2)};
    display: flex;
    align-items: center;

    &:hover {
      color: ${({ theme }) => theme.colors.darkBlue};
    }
  }
`;
