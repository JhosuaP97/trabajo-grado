import TeacherDashboard from "Components/Teacher/TeacherDashboard";
import { GlobalStyles } from "styles/GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "styles/GlobalStyles.css";
import Form from "./Components/Form";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact>
          <Form />
        </Route>
        <Route path="/teacher" exact>
          <TeacherDashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
