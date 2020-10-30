import React from 'react';
import { ModalProvider } from 'react-simple-hook-modal';
import { Apollo } from './Apollo';
import { Layout } from './components/Layout';
import { RepoPicker } from './components/RepoPicker';
import { ConfigController } from './components/ConfigController/ConfigController';
import { TokenGate } from './components/TokenGate';
import { PullRequests } from './components/PullRequests/PullRequests';
import { LabelFilters } from './components/LabelFilters';

import 'react-simple-hook-modal/dist/styles.css';

export const App = () => {
  return (
    <ModalProvider>
      <ConfigController>
        <Layout>
          <TokenGate>
            <Apollo>
              <RepoPicker />

              <LabelFilters />

              <PullRequests />
            </Apollo>
          </TokenGate>
        </Layout>
      </ConfigController>
    </ModalProvider>
  );
};
