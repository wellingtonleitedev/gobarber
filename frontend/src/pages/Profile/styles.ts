import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  > header {
    align-items: center;
    background: #28262e;
    display: flex;
    height: 144px;

    > div {
      margin: 0 auto;
      max-width: 1120px;
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: -176px auto 0;
  max-width: 700px;
  width: 100%;

  form {
    margin: 80px 0;
    text-align: center;
    width: 340px;

    h1 {
      font-size: 20px;
      margin-bottom: 24px;
      text-align: left;
    }
  }
`;

export const AvatarInput = styled.div`
  margin: 0 auto 32px auto;
  position: relative;
  width: 186px;

  img {
    border-radius: 50%;
    height: 186px;
    width: 186px;
  }

  label {
    align-items: center;
    background: #ff9000;
    bottom: 0;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    position: absolute;
    height: 48px;
    right: 0;
    transition: background-color 0.2s;
    width: 48px;

    svg {
      vertical-align: middle;
    }

    input {
      display: none;
    }

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;
