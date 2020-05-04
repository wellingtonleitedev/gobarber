import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import font from '../../constraints/font';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  align-items: center;
  background: #232129;
  border-color: #232129;
  border-radius: 10px;
  border-width: 2px;
  flex-direction: row;
  margin-bottom: 8px;
  padding: 0 16px;
  height: 60px;
  width: 100%;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `};

  ${props =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-family: ${font.regular};
  font-size: 16px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const Error = styled.View``;
