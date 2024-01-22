import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import CourseSidebarMain from '../components/course-sidebar';

const CourseSidebar = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Course Sidebar'} />
      <CourseSidebarMain/>
    </Wrapper>
  );
};

export default CourseSidebar;