
import "./App.css";
import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./pages/Home/Home";
import { UserTemplate } from "./template/UserTemplate/UserTemplate";
import Login from "./pages/Login/Login";
import Course from "./pages/Course/Course";
import CourseDetails from "./components/Course/CourseDetails";
import { AdminTemplate } from "./template/AdminTemplate/AdminTemplate";
import AdminPage from "./pages/AdminPage/AdminPage";
import DemoTest from "./components/DemoTest";
import AdminTableManager from "./components/AdminTable/AdminTableManager";
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <AdminTemplate  path="/admin-page" exact Component = {AdminPage}/> 
        <AdminTemplate  path="/admin-table-manager" exact Component = {AdminTableManager}/> 

        <UserTemplate path="/sign-in" exact Component={Login} />
        <UserTemplate path="/course" exact Component={Course} />
        <UserTemplate path="/course-detail" exact Component={CourseDetails} />
        <UserTemplate path="/demo-test" exact Component={DemoTest} />
        <UserTemplate path="/" exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
