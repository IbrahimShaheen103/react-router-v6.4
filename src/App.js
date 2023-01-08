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
import Contact, { contactAction } from "./pages/help/Contact";
import Feq from "./pages/help/Feq";
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerDetails, {
  careerDetailsLoader,
} from "./pages/careers/CareerDetails";
import CareersError from "./pages/careers/CareersError";

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
          <Route path="contact" element={<Contact />} action={contactAction} />
          {/** /help/contact */}
        </Route>
        {/** loaders && Dynamic Roots*/}
        <Route
          path="career"
          element={<CareerLayout />}
          errorElement={<CareersError />} //if type uncorrected url pram or api don't work
        >
          <Route index element={<Careers />} loader={careersLoader} />
          <Route
            path=":id"
            element={<CareerDetails />}
            loader={careerDetailsLoader}
          />
        </Route>
        {/**not found page */}
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
