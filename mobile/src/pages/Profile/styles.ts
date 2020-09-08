import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RectButton } from 'react-native-gesture-handler';
import font from '../../constraints/font';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: ${Platform.OS === 'android' ? getStatusBarHeight() + 100 : 0}px 30px
    ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: ${font.medium};
  margin: 24px 0;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
`;

export const UserAvatarButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`;

export const UserAvatar = styled.Image`
  align-self: center;
  border-radius: 98px;
  height: 186px;
  width: 186px;
`;
