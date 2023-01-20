import styled, { css } from "styled-components";

const DefaultStyledField = styled.input.attrs(({ name, type }) => ({
  id: name ? `field-${name}` : null,
  type: type ? type : name,
}))`
  border-radius: 10px;
  background: #ffffff;
  box-shadow: inset 5px 5px 8px #c4c4c4, inset -5px -5px 8px #ffffff;
  border: none;
  width: 180px;
  height: 30px;
  margin: 12px;
  padding-left: 15px;
  font-size: 14px;
  &:focus {
    background: #bce0ff;
  }
`;

const StyledField = styled(DefaultStyledField)((props) => props.style);

export { StyledField };
