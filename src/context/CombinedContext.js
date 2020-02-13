import React from 'react';
import { Provider as AuthProvider } from './AuthContext';
import { Provider as ErrorProvider } from './ErrorContext';

const CombinedProvider = ({ children }) => (
  <>
    <ErrorProvider>
      <AuthProvider>
        { children }
      </AuthProvider>
    </ErrorProvider>
  </>
);

export default CombinedProvider;
