import React, { useContext } from 'react';
import { Text, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { signout } from '../thunks/auth';

const AccountScreen = () => {
  const { dispatch } = useContext(AuthContext);
  return (
    <>
      <Text style={{ fontSize: 48 }}>Account Screen</Text>
      <Spacer>
        <Button
          title="Sign Out"
          onPress={() => signout(dispatch)}
        />
      </Spacer>
    </>
  );
};

export default AccountScreen;
