import useCourses from '../../../hooks/use-courses';

const CourseView = ({current_show}) => {
  const { allCourses } = useCourses();
  return (
    <>
      <div className="course__view">
        <h4>Showing 1 - {current_show} of {allCourses.length}</h4>
      </div>
    </>
  );
};

export default CourseView;