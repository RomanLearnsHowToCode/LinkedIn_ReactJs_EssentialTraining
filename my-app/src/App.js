import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Events, Contact, Whoops404, Services, CompanyHistory, Location } from "./pages"; // these are our pages declared in pages.js


// Fetching data from other api and internet
// https://api.github.com/users/RomanLearnsHowToCode 

// Chapter 07 - React router, Initial commit

// Application with basic MENU routes, services, history and location are NESTED routes inside about
function App() {
return(
  <div>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About/>}>
        <Route path="services" element={<Services/>}/>
        <Route path="history" element={<CompanyHistory/>}/>
        <Route path="location" element={<Location/>}/>
      </Route>
      <Route path="/events" element={<Events/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<Whoops404/>}/>
    </Routes>
  </div>
  );
}

export default App;