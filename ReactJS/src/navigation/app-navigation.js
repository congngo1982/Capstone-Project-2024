import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ScrollToTop from '../components/scroll-to-top';
import About from '../pages/about';
import Blog from '../pages/blog';
import BlogDetails from '../pages/blog-details';
import Cart from '../pages/cart';
import Checkout from '../pages/checkout';
import Contact from '../pages/contact';
import Course from '../pages/course';
import CourseDetails from '../pages/course-details';
import CourseList from '../pages/course-list';
import CourseSidebar from '../pages/course-sidebar';
import DynamicBlogDetails from '../pages/d-blog-details';
import DynamicCourseDetails from '../pages/d-course-details';
import DynamicEventDetails from '../pages/d-event-details';
import DynamicInstructorDetails from '../pages/d-instructor-details';
import ErrorPage from '../pages/error-page';
import EventDetails from '../pages/event-details';
import Home from '../pages/home';
import HomeTwo from '../pages/home-2';
import HomeThree from '../pages/home-3';
import Instructor from '../pages/instructor';
import InstructorDetails from '../pages/instructor-details';
import SignIn from '../pages/sign-in';
import SignUp from '../pages/sign-up';
import Wishlist from '../pages/wishlist';


const AppNavigation = () => {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/home-two" element={<HomeTwo />}></Route>
          <Route path="/home-three" element={<HomeThree />}></Route>
          <Route path="/courses" element={<Course />}></Route>
          <Route path="/course-list" element={<CourseList />}></Route>
          <Route path="/course-sidebar" element={<CourseSidebar />}></Route>
          <Route path="/course-details" element={<CourseDetails />}></Route>
          <Route path="/course-details/:id" element={<DynamicCourseDetails />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog-details" element={<BlogDetails />}></Route>
          <Route path="/blog-details/:id" element={<DynamicBlogDetails />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/instructor" element={<Instructor />}></Route>
          <Route path="/instructor-details" element={<InstructorDetails />}></Route>
          <Route path="/instructor-details/:id" element={<DynamicInstructorDetails />}></Route>
          <Route path="/event-details" element={<EventDetails />}></Route>
          <Route path="/event-details/:id" element={<DynamicEventDetails />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          
          <Route path="/error" element={<ErrorPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppNavigation;