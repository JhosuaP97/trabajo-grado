import { GlobalStyles } from "styles/GlobalStyles";
// States
import FieldState from "Context/Field/FieldState";
import GroupState from "Context/Group/GroupState";
import IndividualState from "Context/Individual/IndividualState";
import "styles/GlobalStyles.css";
import Form from "./Components/Form";

function App() {
  return (
    <>
      <GlobalStyles />
      <FieldState>
        <GroupState>
          <IndividualState>
            <Form />
          </IndividualState>
        </GroupState>
      </FieldState>
    </>
  );
}

export default App;
