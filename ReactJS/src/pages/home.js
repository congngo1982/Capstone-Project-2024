import Wrapper from '../layout/wrapper';
import HomeMain from '../components/home';
import SEO from '../components/seo';

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Default'} />
      <HomeMain/>
    </Wrapper>
  );
};

export default Home;