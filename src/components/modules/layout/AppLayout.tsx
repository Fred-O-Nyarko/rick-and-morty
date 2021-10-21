import React from 'react';
import { Header, Footer } from '../../elements';

const AppLayout: React.FC = ({ children }) => {
  return (
    <div className="body">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
