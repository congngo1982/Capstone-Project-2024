import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCourses } from "../redux/features/course-slice";

const useCourses = () => {
  const [allCourses,setAllCourses] = useState(useSelector(selectCourses));
  
  return {
    allCourses,
    setAllCourses,
  }
}


export default useCourses;