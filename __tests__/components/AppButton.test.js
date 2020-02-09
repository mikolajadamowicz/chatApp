import React from 'react';
import {render} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

import AppButton, {styles} from '../../src/components/AppButton';

test('AppButton init', () => {
  const {getByText, getByLabelText} = render(<AppButton text="test text" />);

  const appButton = getByLabelText('App Button');

  expect(getByText(/test text/)).toBeTruthy();
  expect(appButton.props.style[1]).toBe(styles.normal);
  expect(appButton).toBeTruthy();
});

test('AppButton outlined', () => {
  const {getByLabelText} = render(<AppButton outline />);

  const appButton = getByLabelText('App Button');

  expect(appButton.props.style[1]).toBe(styles.outline);
});
