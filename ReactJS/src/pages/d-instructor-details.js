import { useParams} from 'react-router-dom';
import Cta from '../components/common/cta/cta';
import InstructorDetailsArea from '../components/common/instructor/instructor-details-area';
import SEO from '../components/seo';
import { instructor } from '../data';
import Footer from '../layout/footers/footer';
import Header from '../layout/headers/header';
import Wrapper from '../layout/wrapper';

const DynamicInstructorDetails = () => {
  const { id } = useParams();
  const teacher = instructor.find(i => Number(i.id) === Number(id));
  return (
    <Wrapper>
      {/* seo start */}
      <SEO pageTitle={'Instructor Details'} />
      {/* seo end */}

      {/* header start */}
      <Header header_shadow={true} />
      {/* header end */}

      {/* instructor details area start */}
      <InstructorDetailsArea instructor={teacher} />
      {/* instructor details area end */}

      {/* cta start */}
      <Cta />
      {/* cta end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
};

export default DynamicInstructorDetails;