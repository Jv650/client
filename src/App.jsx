import { Routes, Route } from "react-router";

//components
import Header from "./components/Header";
import SignIn from "./components/Header";
import Notes from "./components/Notes";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}
export default App;
