import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';
import font from '../../constraints/font';

export const Container = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: ${font.medium};
  margin: 64px 0 24px;
`;

export const BackToSignInButton = styled.TouchableOpacity`
  align-items: center;
  background: #312e38;
  border-top-color: #232129;
  border-top-width: 1px;
  bottom: 0;
  flex-direction: row;
  justify-content: center;
  left: 0;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  position: absolute;
  right: 0;
`;

export const BackToSignInText = styled.Text`
  color: #f4ede8;
  font-size: 18px;
  font-family: ${font.regular};
  margin-left: 16px;
`;
