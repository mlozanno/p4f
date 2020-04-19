import styled from 'styled-components';

export const StyledPhotos = styled.article`
  figure {
    width: 100%;
    max-width: ${({ theme }) => theme.metric(75)};
    margin: 0 auto;
  }

  img {
    display: block;
    width: 100%;
  }

  > div {
    user-select: none;

    svg {
      display: none;
    }
  }

  ul {
    overflow-y: scroll;
    display: flex;
    margin-top: ${({ theme }) => theme.metric(3)};

    li {
      display: block;
      flex-shrink: 0;
    }

    img {
      max-width: 150px;
      display: block;
      border: 4px solid #f0f0f0;
    }
  }

  @media (min-width: 1024px) {
    > div {
      padding: 0 ${({ theme }) => theme.metric(8)};
      position: relative;

      svg {
        display: block;
        font-size: 100px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        opacity: 0.5;
        transition: opacity 0.2s linear;

        &:hover {
          opacity: 1;
        }

        &:first-child {
          left: ${({ theme }) => theme.metric(-2)};
        }

        &:last-child {
          right: ${({ theme }) => theme.metric(-2)};
        }
      }
    }
  }
`;