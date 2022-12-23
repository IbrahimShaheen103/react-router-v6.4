//third party
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareerLayout from "./layouts/CareerLayout";
//pages
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/help/Contact";
import Feq from "./pages/help/Feq";
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from "./pages/Careers";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        {/** nested roots */}
        <Route path="help" element={<HelpLayout />}>
          {/** /help => as a parent  */}
          <Route path="faq" element={<Feq />} /> {/** /help/feq */}
          <Route path="contact" element={<Contact />} /> {/** /help/contact */}
        </Route>
        {/** loaders */}
        <Route path="career" element={<CareerLayout />}>
          <Route index element={<Careers />} loader={careersLoader} />
        </Route>
        {/**not found page */}
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
