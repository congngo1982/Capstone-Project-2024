import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCourses } from '../../../redux/features/course-slice';
import { SearchTwo } from '../../../svg';
import RelatedCourse from './related-course';

const price_filter = ['All', 'Free Courses', 'Premium Courses'];

const CourseSidebar = ({ setAllCourses }) => {
  // all courses
  const courses = useSelector(selectCourses);
  // coursesCategory
  const coursesCategory = useSelector(selectCourses).map(course => course.category);
  // allCategory
  const allCategory = ['All Category', ...new Set(coursesCategory)];
  // all_language
  const all_language = ['All Language', ...new Set(courses.map(course => course.language))];
  // skill label
  const skill_label = ['All Levels', ...new Set(courses.map(course => course.skill_label))];
  // select category
  const [selected, setSelected] = useState('All Category');
  // select language
  const [selectLanguage, setSelectLanguage] = useState('All Language');
  // select price
  const [selectPrice, setSelectPrice] = useState('All');
  // select skill
  const [selectSkill, setSelectSkill] = useState('All Levels');

  //handle Category 
  const handleCategory = category => {
    setSelected(category)
    if (category === 'All Category') {
      setAllCourses(courses)
    }
    else {
      const all_course = courses.filter(course => course.category === category);
      setAllCourses(all_course)
    }
  }


  // handle Language
  const handleLanguage = language => {
    setSelectLanguage(language)
    if (language === 'All Language') {
      setAllCourses(courses)
    }
    else {
      setAllCourses(courses.filter(course => course.language === language))
    }
  }


  // handle Price
  const handlePrice = price => {
    setSelectPrice(price)
    if (price === 'All') {
      setAllCourses(courses)
    }
    if (price === 'Free Courses') {
      setAllCourses(courses.filter(item => item.price === 'free'))
    }
    if (price === 'Premium Courses') {
      setAllCourses(courses.filter(item => item.price !== 'free'))
    }
  }

  // handleSkill
  const handleSkill = skill => {
    setSelectSkill(skill)
    if (skill === 'All Levels') {
      setAllCourses(courses)
    }
    else {
      setAllCourses(courses.filter(course => course.skill_label === skill))
    }
  }

  // handleSearch
  const handleSearch = e => {
    setAllCourses(courses.filter(course => course.title.toLowerCase()
    .includes(e.target.value.toLowerCase())))
  }
  // handleChange
  const handleChange = () => { }
  const handleSubmit = e => e.preventDefault();

  return (
    <>
      <div className="course__sidebar pl-70">
        <div className="course__sidebar-search mb-50">
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => handleSearch(e)} placeholder="Search for courses..." />
            <button type="submit">
              <SearchTwo />
            </button>
          </form>
        </div>
        <div className="course__sidebar-widget grey-bg">
          <div className="course__sidebar-info">
            <h3 className="course__sidebar-title">Categories</h3>
            <ul>
              {allCategory.map((category, index) => (
                <li key={index} onClick={() => handleCategory(category)}>
                  <div className="course__sidebar-check mb-10 d-flex align-items-center">
                    <input onChange={handleChange} className="m-check-input" type="checkbox"
                      checked={category === selected ? 'checked' : ''} id={`m-${index}`} />
                    <label className="m-check-label" htmlFor={`${category}`}>{category}</label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="course__sidebar-widget grey-bg">
          <div className="course__sidebar-info">
            <h3 className="course__sidebar-title">Language</h3>
            <ul>
              {all_language.map((language, index) => (
                <li key={index} onClick={() => handleLanguage(language)}>
                  <div className="course__sidebar-check mb-10 d-flex align-items-center">
                    <input onChange={handleChange} className="m-check-input" type="checkbox"
                      checked={language === selectLanguage ? 'checked' : ''} id={`m-${index}`} />
                    <label className="m-check-label" htmlFor={`${language}`}>{language}</label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="course__sidebar-widget grey-bg">
          <div className="course__sidebar-info">
            <h3 className="course__sidebar-title">Price Filter</h3>
            <ul>
              {price_filter.map((price, index) => (
                <li key={index} onClick={() => handlePrice(price)}>
                  <div className="course__sidebar-check mb-10 d-flex align-items-center">
                    <input onChange={handleChange} className="m-check-input" type="checkbox"
                      checked={price === selectPrice ? 'checked' : ''} id={`m-${index}`} />
                    <label className="m-check-label" htmlFor={`${price}`}>{price}</label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="course__sidebar-widget grey-bg">
          <div className="course__sidebar-info">
            <h3 className="course__sidebar-title">Skill level</h3>
            <ul>
              {skill_label.map((skill, index) => (
                <li key={index} onClick={() => handleSkill(skill)}>
                  <div className="course__sidebar-check mb-10 d-flex align-items-center">
                    <input onChange={handleChange} className="m-check-input" type="checkbox"
                      checked={skill === selectSkill ? 'checked' : ''} id={`m-${index}`} />
                    <label className="m-check-label" htmlFor={`${skill}`}>{skill}</label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="course__sidebar-widget grey-bg">
          {/* related courses */}
          <RelatedCourse/>
           {/* related courses */}
        </div>
      </div>
    </>
  );
};

export default CourseSidebar;