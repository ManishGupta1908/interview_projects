// import { Property } from "csstype";
import styled from "styled-components";

const Button = styled.div`
  position: relative;
  font-weight: 600;
`;
const TypeprimarysizemediumstateRoot = styled.div`position: relative;
  border-radius: 8px;
  background-color: #0073e6;
  height: 40px;
  display: flex;
  flex-direction: row;
  padding: 10px 30px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  text-align: left;
  font-size: 14px;
  color: #fff;
  font-family: Inter;
  position: ${(p) => p.typeprimarysizemediumstatPosition}
  align-self: ${(p) => p.typeprimarysizemediumstatAlignSelf}
`;
const Typeprimarysizemediumstate = ({
  button,
  typeprimarysizemediumstatPosition,
  typeprimarysizemediumstatAlignSelf,
}) => {
  return (
    <TypeprimarysizemediumstateRoot
      typeprimarysizemediumstatPosition={typeprimarysizemediumstatPosition}
      typeprimarysizemediumstatAlignSelf={typeprimarysizemediumstatAlignSelf}
    >
      <Button>{button}</Button>
    </TypeprimarysizemediumstateRoot>
  );
};

export default Typeprimarysizemediumstate;
