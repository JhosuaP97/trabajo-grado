import { GlobalStyles } from "styles/GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "styles/GlobalStyles.css";
import Form from "./Components/Form";
import TeacherDashboard from "Components/Teacher/TeacherDashboard";
import StudentDashboard from "Components/StudentDashboard";

import StudentState from "context/Student/StudentState";

function App() {
  return (
    <StudentState>
      <BrowserRouter>
        <GlobalStyles />
        <Switch>
          <Route path="/" exact>
            <Form />
          </Route>
          <Route path="/teacher" exact>
            <TeacherDashboard />
          </Route>
          <Route path="/student" exact>
            <StudentDashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </StudentState>
  );
}

export default App;
