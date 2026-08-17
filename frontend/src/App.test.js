import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./pages/Auth/LoginPage', () => {
  return function LoginPage() {
    return <div>Login Page</div>;
  };
});

jest.mock('./pages/Auth/RegisterationPage', () => {
  return function RegistrationPage() {
    return <div>Registration Page</div>;
  };
});

test('redirects root path to login page', () => {
  window.history.pushState({}, '', '/');

  render(<App />);

  expect(screen.getByText('Login Page')).toBeInTheDocument();
});
