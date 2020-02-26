import React from 'react';
import { Apollo } from './Apollo';
import { Layout } from './components/Layout';
import { RepoPicker } from './components/RepoPicker';
import { ConfigController } from './components/ConfigController/ConfigController';
import { TokenGate } from './components/TokenGate';
import { PullRequests } from './components/PullRequests/PullRequests';
import { LabelFilters } from './components/LabelFilters';

export const App = () => {
  return (
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
  );
};
