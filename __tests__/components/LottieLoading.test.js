import React from 'react';
import {render} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

import LottieLoading from '../../src/components/LottieLoading';

test('Events init', () => {
  const {getByLabelText} = render(<LottieLoading />);

  expect(getByLabelText('Loading animation')).toBeTruthy();
});
