import React from 'react';
import { Header, Footer, ScrollTop } from '../../elements';

const AppLayout: React.FC = ({ children }) => {
  return (
    <div className="body min-h-screen">
      <Header />
      <div className="container mx-auto my-24">
        <main className="w-full px-0 flex flex-col flex-grow my-3">
          {children}
        </main>
      </div>
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default AppLayout;
