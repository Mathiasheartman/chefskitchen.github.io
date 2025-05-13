import styled, { css } from "styled-components";

const variations = {
  signIn: css`
    background-color: var(--defaultColorfade);
    &:hover {
      background-color: #df6853;
    }
  `,
  signUp: css`
    background-color: #df6853;
    &:hover {
      background-color: var(--defaultColorfade);
    }
  `,
  LetsCook: css`
    background-color: #df6853;
    &:hover {
      background-color: white;
    }
    border: 1px solid #df6853;
    padding: 1rem 2rem;

    @media (max-width: 384px) {
      font-size: 0.8rem;
      padding: 0.5rem 0.5rem;
    }
  `,
  ExploreNow: css`
    background-color: #ffffff;
    border: 1px solid #df6853;
    &:hover {
      background-color: #df6853;
    }
    padding: 1rem 2rem;

    @media (max-width: 384px) {
      font-size: 0.8rem;
      padding: 0.5rem 0.5rem;
    }
  `,
};

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "signIn",
};

export default Button;
