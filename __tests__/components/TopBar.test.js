import React from 'react';
import {render} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

import TopBar from '../../src/components/TopBar';

jest.mock('expo-linear-gradient', () => {
  const {View} = require('react-native');
  return {
    LinearGradient: props => <View {...props} />,
  };
});

test('TopBar init', () => {
  const {getByText, getByLabelText} = render(<TopBar />);

  const appButton = getByLabelText('Search for next person');
  expect(getByText(/online users/)).toBeTruthy();
  expect(appButton).toBeTruthy();
});
