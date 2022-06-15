import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;

  div {
  }

  img {
    width: 50%;
    height: auto;
  }
`;

export const Title = styled.h2`
  font-size: 1.5em;
  color: orange;
`;

export const Div = styled.div``;
export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "orange")};
  color: ${(props) => (props.primary ? "white" : "black")};

  font-size: 1em;
  margin: 20px;
  display: flex;
  padding: 0.25em 1em;
  border: 2px solid orange;
  border-radius: 3px;
`;
export const List = styled.ul`
  list-style: none;
  padding: 0px 20px;
  background: salmon;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
  @media (max-width: 768px) {
    margin: 20px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  :first-of-type {
    border-top: none;
  }
`;
