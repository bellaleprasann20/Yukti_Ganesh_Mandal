import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home       from "../pages/Home";
import About      from "../pages/About";
import Events     from "../pages/Events";
import Gallery    from "../pages/Gallery";
import Donations  from "../pages/Donations";
import Committee  from "../pages/Committee";
import Contact    from "../pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/"          element={<Home />}      />
        <Route path="/about"     element={<About />}     />
        <Route path="/events"    element={<Events />}    />
        <Route path="/gallery"   element={<Gallery />}   />
        <Route path="/donations" element={<Donations />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/contact"   element={<Contact />}   />
      </Route>
    </Routes>
  );
}