import HelperText from '@/components/Auth/HelperText';
import RegistrationForm from '@/components/Auth/RegistrationForm';
import WelcomeText from '@/components/Auth/WelcomeText';
import Title from '@/components/Title';

export default function RegisterPage() {
  return (
    <>
      <Title>Registration</Title>
      <WelcomeText>Thank you for your interest in our platform.</WelcomeText>
      <RegistrationForm />
      <HelperText linkText="login">Already have an account?</HelperText>
    </>
  );
}
