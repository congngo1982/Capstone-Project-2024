import { useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';

import CourseDetailsArea from '../components/common/course/course-details';
import Cta from '../components/common/cta/cta';
import SEO from '../components/seo';
import Footer from '../layout/footers/footer';
import Header from '../layout/headers/header';
import Wrapper from '../layout/wrapper';
import { selectCourses } from '../redux/features/course-slice';

const DynamicCourseDetails = () => {
  const { id } = useParams();
  const courses = useSelector(selectCourses);
  const course = courses.find(course => Number(course.id) === Number(id))

  return (
    <Wrapper>
      {/* seo start */}
      <SEO pageTitle={'Course Details'} />
      {/* seo end */}

      {/* header start */}
      <Header header_shadow={true} />
      {/* header end */}

      {/* course details */}
      <CourseDetailsArea course={course} />
      {/* course details */}

      {/* cta start */}
      <Cta />
      {/* cta end */}

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </Wrapper>
  );
};

export default DynamicCourseDetails;