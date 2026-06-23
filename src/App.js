import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import RegistrationForm from "./Components/RegistrationForm";
import ParticipantList from "./Components/ParticipantList";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <RegistrationForm />
      <ParticipantList />
      <Footer />
    </div>
  );
}

export default App;