import "./App.css";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import Register from "./components/registerForm";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Movies></Movies>}></Route>
        <Route path='/Customers' element={<h1>Customers</h1>}></Route>
        <Route path='/Rentals' element={<h1>Rental</h1>}></Route>
        <Route path='/movies/:id' element={<MovieForm></MovieForm>}></Route>
        <Route path='/login' element={<LoginForm></LoginForm>}></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
        <Route path='/*' element={<h1>Page not Found</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
