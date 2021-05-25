import { GlobalStyles } from "styles/GlobalStyles";
import GroupState from "Context/Group/GroupState";
import IndividualState from "Context/Individual/IndividualState";
import "styles/GlobalStyles.css";
import Form from "./Components/Form";

function App() {
  return (
    <>
      <GlobalStyles />
      <GroupState>
        <IndividualState>
          <Form />
        </IndividualState>
      </GroupState>
    </>
  );
}

export default App;
