import { instructor } from '../../data';
import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import Cta from '../common/cta/cta';
import InstructorDetailsArea from '../common/instructor/instructor-details-area';

const index = () => {
  return (
    <>
      {/* header start */}
      <Header header_shadow={true} />
      {/* header end */}

      {/* instructor details area start */}
      <InstructorDetailsArea instructor={instructor[0]} />
      {/* instructor details area end */}

      {/* cta start */}
      <Cta />
      {/* cta end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </>
  );
};

export default index;