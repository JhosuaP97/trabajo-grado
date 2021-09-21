import { GlobalStyles } from "styles/GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "styles/GlobalStyles.css";
import Form from "./Components/Form";
import StudentDashboard from "Components/StudentDashboard";
import TeacherState from "context/Teacher/TeacherState";
import StudentState from "context/Student/StudentState";
import ProductState from "context/Product/ProductState";
import ProgressBarState from "context/ProgressBar/ProgressBarState";
import LogIn from "Components/auth/LogIn";
import Register from "Components/auth/Register";
import CoursesPageTeacher from "Pages/CoursesPageTeacher";
import TeacherDashboardPractices from "Components/TeacherDashboardPractices";
import AuthState from "context/Auth/AuthState";
// import tokenAuth from "config/tokenAuth";
import TeacherGroupsPractice from "Components/TeacherGroupsPractice";
import PracticesPageStudent from "Pages/PracticesPageStudent";
import Enviroment from "Components/Enviroment";
import NotFound from "Pages/NotFound";

// Revisar si tenemos token
// const token = localStorage.getItem("token");

// if (token) {
//   tokenAuth(token);
// }

function App() {
  return (
    <TeacherState>
      <ProgressBarState>
        <StudentState>
          <ProductState>
            <AuthState>
              <BrowserRouter>
                <GlobalStyles />
                <Switch>
                  <Route exact path="/" component={LogIn} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/courses" component={CoursesPageTeacher} />
                  <Route
                    exact
                    path="/courses/:idCurso"
                    component={TeacherDashboardPractices}
                  />
                  <Route
                    exact
                    path="/courses/:idCurso/create-practice"
                    component={Form}
                  />
                  <Route
                    exact
                    path="/courses/:idCurso/practice1/:idPractica"
                    component={TeacherGroupsPractice}
                  />
                  <Route
                    exact
                    path="/courses/:idCurso/practice2/:idPractica"
                    component={TeacherGroupsPractice}
                  />

                  <Route
                    exact
                    path="/courses/:idCurso/practice3/:idPractica"
                    component={TeacherGroupsPractice}
                  />

                  <Route
                    exact
                    path="/practice/student"
                    component={PracticesPageStudent}
                  />
                  <Route
                    exact
                    path="/practice/student/enviroment/"
                    component={Enviroment}
                  />

                  <Route
                    exact
                    path="/practice/student/dashboard/:idPractica/corte-1"
                    component={StudentDashboard}
                  />

                  <Route
                    exact
                    path="/practice/student/dashboard/:idPractica/corte-2"
                    component={StudentDashboard}
                  />
                  <Route
                    exact
                    path="/practice/student/dashboard/:idPractica/corte-3"
                    component={StudentDashboard}
                  />
                  <Route component={NotFound} />
                </Switch>
              </BrowserRouter>
            </AuthState>
          </ProductState>
        </StudentState>
      </ProgressBarState>
    </TeacherState>
  );
}

export default App;
