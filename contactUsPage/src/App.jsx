import "./App.css";
import Navigation from "./components/Navigation/navigation.jsx";
import ContactHeader from "./components/ContactHeader/ContactHeader.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import Button from "./components/Button/Button.jsx";

function App() {
  return (
    <div>
      <Navigation />
      <ContactHeader />
      <ContactForm />
      <Button />
    </div>
  );
}
 
export default App;
