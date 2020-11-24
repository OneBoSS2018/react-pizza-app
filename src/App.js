import  React from 'react'
import {
  BrowserRouter as Router
} from "react-router-dom"
import {GlobalStyle} from "./GlobalStyles";
import {MainPage} from "./components/mainPage/mainPage";
import Products from "./components/products/products";
import {productsDB} from "./components/products/db";
import Features from "./components/features/features";
import Footer from "./components/footer/footer";

function App() {
  return (
      <Router>
          <GlobalStyle />
        <MainPage />
        <Products heading='Choose your favorite' data={productsDB}/>
        <Features />
        <Footer />
      </Router>
  );
}

export default App;
