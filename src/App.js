import React from 'react';
import { Apollo } from './Apollo';
// import { Test } from './Test';
import { Layout } from './components/Layout';
import { RepoPicker } from './components/RepoPicker';
import { ConfigController } from './components/ConfigController/ConfigController';
import { TokenGate } from './components/TokenGate';

const token = '514efa1c3afb28538a89d74a2d19ce9ef789baea';

export const App = () => {
  return (
    <ConfigController>
      <Layout>
        <TokenGate>
          <Apollo token={token}>
            <RepoPicker />
            {/* <Test /> */}
          </Apollo>
        </TokenGate>
      </Layout>
    </ConfigController>
  );
};
