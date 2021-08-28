import { GlobalStyles } from "styles/GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "styles/GlobalStyles.css";
import Form from "./Components/Form";
import StudentDashboard from "Components/StudentDashboard";
import TeacherState from "context/Teacher/TeacherState";
import StudentState from "context/Student/StudentState";
import ProductState from "context/Product/ProductState";
import Login from "Components/auth/LogIn";
import Register from "Components/auth/Register";
import Courses from "Pages/Courses";
import TeacherDashboardPractices from "Components/TeacherDashboardPractices";
import AuthState from "context/Auth/AuthState";
import tokenAuth from "config/tokenAuth";
import PrivateRoute from "Components/routes/PrivateRoute";

// Revisar si tenemos token
const token = localStorage.getItem("token");

if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <TeacherState>
      <StudentState>
        <ProductState>
          <AuthState>
            <BrowserRouter>
              <GlobalStyles />
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute exact path="/courses" component={Courses} />
                <Route
                  exact
                  path="/courses/:idCurso/practice"
                  component={TeacherDashboardPractices}
                />
                <Route exact path="/create-practice" component={Form} />
                <Route exact path="/student" component={StudentDashboard} />
              </Switch>
            </BrowserRouter>
          </AuthState>
        </ProductState>
      </StudentState>
    </TeacherState>
  );
}

export default App;
