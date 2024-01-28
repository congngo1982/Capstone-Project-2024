import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import InstructorMain from '../components/instructor';

const Instructor = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Instructor'} />
      <InstructorMain/>
    </Wrapper>
  );
};

export default Instructor;