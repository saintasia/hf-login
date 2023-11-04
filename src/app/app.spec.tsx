import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should show login page', () => {
    const { getByText } = render(<App />);
    expect(getByText(/choose one of the following/i)).toBeTruthy();
  });
});
