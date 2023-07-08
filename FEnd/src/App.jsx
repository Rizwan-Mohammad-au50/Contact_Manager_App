import "./App.css";
import AddContact from "./components/AddContact/AddCOntact";
import UpdateContact from "./components/UpdateContact/UpdateContact";
import Contacts from "./components/contacts";
import {Routes,Route} from "react-router-dom"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Contacts />} />
      <Route path="/AddContact" element={<AddContact />} />
      <Route path="/UpdateContact" element={<UpdateContact />} />
    </Routes>
  );
};

export default App;
