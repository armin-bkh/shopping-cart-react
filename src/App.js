import { Route, Routes } from "react-router";
import { routes } from "./Routes/Routes";

const  App = () => {
  return (
    <Routes>
      {
        routes.map(route => <Route path={route.path} element={route.element} key={route.path} />)
      }
      {/* <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<Cart />} /> */}
    </Routes>
  );
}

export default App;
