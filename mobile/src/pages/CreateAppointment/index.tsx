import React from 'react';
import { View, Button } from 'react-native';
import { useAuth } from '../../hooks/auth';

// import { Container } from './styles';

const CreateAppointment: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
      <Button title="SignOut" color="#ff9000" onPress={signOut} />
    </View>
  );
};

export default CreateAppointment;
