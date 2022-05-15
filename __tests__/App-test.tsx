/**
 * @format
 */

import 'react-native';

import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// eslint-disable-next-line no-restricted-imports
import App from '../App';

it('renders correctly', () => {
  renderer.create(<App />);
});
