import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import SignInMain from '../components/sign-in';

const SignIn = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Sign in'} />
      <SignInMain/>
    </Wrapper>
  );
};

export default SignIn;