import { GlobalStyles } from "styles/GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "styles/GlobalStyles.css";
import Form from "./Components/Form";
import TeacherDashboard from "Components/Teacher/TeacherDashboard";
import StudentDashboard from "Components/StudentDashboard";

import StudentState from "context/Student/StudentState";
import ProductState from "context/Product/ProductState";

function App() {
  return (
    <StudentState>
      <ProductState>
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
      </ProductState>
    </StudentState>
  );
}

export default App;
