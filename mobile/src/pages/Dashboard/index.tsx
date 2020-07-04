/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
  ProviderList,
  ProviderContainer,
  ProviderAvatar,
  ProviderInfo,
  ProviderName,
  ProviderMeta,
  ProviderMetaText,
} from './styles';

export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { navigate } = useNavigation();
  const [providers, setProviders] = useState<Provider[]>([]);

  useEffect(() => {
    api.get('/providers').then(({ data }: any) => {
      setProviders(data);
    });
  }, []);

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem Vindo, {'\n'}
          <UserName>{user.name}</UserName>
        </HeaderTitle>
        <ProfileButton
          onPress={() => {
            navigate('Profile');
          }}
        >
          <UserAvatar source={{ uri: user.avatar_url }} />
        </ProfileButton>
      </Header>
      <ProviderList
        keyExtractor={provider => provider.id}
        data={providers}
        renderItem={({ item: provider }) => (
          <ProviderContainer
            onPress={() => {
              console.log('AKIOH');
            }}
          >
            <ProviderAvatar source={{ uri: provider.avatar_url }} />
            <ProviderInfo>
              <ProviderName>{provider.name}</ProviderName>
              <ProviderMeta>
                <Icon name="clock" size={14} color="#ff9000" />
                <ProviderMetaText />
              </ProviderMeta>
            </ProviderInfo>
          </ProviderContainer>
        )}
      />
    </Container>
  );
};

export default Dashboard;
