import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Login from './login';

describe('Login', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Login />);
    expect(baseElement).toBeTruthy();
  });

  it('should have an email input', async () => {
    const user = userEvent.setup()
    render(<Login />);
    const emailInput = screen.getByLabelText(/email/i)
    const button = screen.getByRole('button', {name: "Log in"})
    expect(emailInput).toBeTruthy();
    await user.type(emailInput, `333`)
    await user.click(button)
    expect(screen.getByText(/must be a valid email/i))
  });

  it('should have a password input', async () => {
    const user = userEvent.setup()
    render(<Login />);
    const passwordInput = screen.getByLabelText(/password/i)
    const button = screen.getByRole('button', {name: "Log in"})
    expect(passwordInput).toBeTruthy();
    await user.type(passwordInput, `333`)
    await user.click(button)
    expect(screen.getByText(/must be at least 8 characters/i))
  });

  it('should have a submit button', () => {
    render(<Login />);
    expect(screen.getByRole('button', { name: "Log in" })).toBeTruthy();
  });

  it('should have a google login button', () => {
    render(<Login />);
    expect(screen.getByRole('button', { name: /log in with google/i })).toBeTruthy();
  });

  it.todo('should call the onSubmit function when the form is submitted');
});
