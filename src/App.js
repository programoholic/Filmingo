import React from 'react';
import Layout from './hoc/Layout/Layout';
import Router from './core/Router';

function App() {
  return (
      <Layout>
          {/* <div> Test </div> */}
          <Router  />
      </Layout>
  );
}

export default App;
