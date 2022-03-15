import styled from "styled-components";
import { Input, Button } from "antd";

export const InputContainer = styled.div`
  width: 30%;
  height: 40px;
  margin: 0.9em 0 0.5em;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RoundSearch = styled(Input)`
  background-color: var(--catskill-white);
  border-radius: 10px;
  color: var(--catskill-white);

  input::placeholder {
    color: #000;
  }

  .ant-input {
    background-color: var(--catskill-white);
  }
`;

export const RoundButton = styled(Button)`
  margin-top: 0.2rem;
  margin-left: 1rem;
  width: 92px;
  height: 38px;
  border-radius: 12px;
`;

export const UserAvatarContainer = styled.div`
  position: absolute;
  right: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
