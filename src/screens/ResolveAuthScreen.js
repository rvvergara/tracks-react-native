import { useEffect } from 'react';
import { autoSignIn } from '../thunks/auth';

const ResolveAuthScreen = () => {
  useEffect(() => {
    autoSignIn();
  }, []);

  return null;
};

export default ResolveAuthScreen;
