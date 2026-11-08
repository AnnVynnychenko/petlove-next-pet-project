import HelperText from '@/components/Auth/HelperText';
import LoginForm from '@/components/Auth/LoginForm';
import WelcomeText from '@/components/Auth/WelcomeText';
import Title from '@/components/Title';

export default function LoginPage() {
  return (
    <>
      <Title>Log in</Title>
      <WelcomeText>
        Welcome! Please enter your credentials to login to the platform:
      </WelcomeText>
      <LoginForm />
      <HelperText linkText="register">Don&apos;t have an account? </HelperText>
    </>
  );
}
