import Form from "./Components/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Success from "./Components/Success";

function App() {
  return (
    <>
      <h1>
        <center>Form</center>
      </h1>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
