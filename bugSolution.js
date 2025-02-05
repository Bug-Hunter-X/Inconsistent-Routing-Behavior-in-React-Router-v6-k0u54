import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation(); // Track location changes

  return (
    <BrowserRouter>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">Go to About</Link>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}
//If it's still happening, add a key to the routes, in the case the components are dynamic:
// <Route key={index} path="/about" element={<About />} />
//For this example, I add a new component to demonstrate that keys may help solving the problem
function Other(){
  return(
    <div>Other component</div>
  );
}
