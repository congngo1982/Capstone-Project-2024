import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import SignUpMain from '../components/sign-up';

const SignUp = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Sign up'} />
      <SignUpMain/>
    </Wrapper>
  );
};

export default SignUp;