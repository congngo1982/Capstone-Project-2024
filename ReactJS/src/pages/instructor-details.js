import Wrapper from '../layout/wrapper';
import SEO from '../components/seo';
import InstructorDetailsMain from '../components/instructor-details';

const InstructorDetails = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Instructor Details'} />
      <InstructorDetailsMain/>
    </Wrapper>
  );
};

export default InstructorDetails;