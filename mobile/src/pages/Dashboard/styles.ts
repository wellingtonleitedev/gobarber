import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import font from '../../constraints/font';
import { Provider } from './index';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  padding: 24px;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + 24 : 24};
  background: #28262e;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  font-family: ${font.regular};
  line-height: 28px;
`;

export const UserName = styled.Text`
  color: #ff9000;
  font-family: ${font.medium};
`;

export const ProfileButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  height: 56px;
  width: 56px;
  border-radius: 28px;
`;

export const ProviderList = styled(FlatList as new () => FlatList<Provider>)`
  padding: 32px 24px 16px;
`;

export const ProviderContainer = styled.TouchableOpacity`
  background: #3e3b47;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
`;

export const ProviderAvatar = styled.Image`
  height: 72px;
  width: 72px;
  border-radius: 36px;
`;

export const ProviderInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const ProviderName = styled.Text`
  font-family: ${font.medium};
  font-size: 18px;
  color: #f4ede8;
`;

export const ProviderMeta = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const ProviderMetaText = styled.Text`
  margin-left: 8px;
  color: #999591;
  font-family: ${font.regular};
`;
