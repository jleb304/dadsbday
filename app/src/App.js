import { Gallery } from "./Gallery.jsx";
import { Contact } from "./Contact.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Gallery/>}/>
              <Route path="contact" element={<Contact/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
