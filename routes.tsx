import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Structure } from "./pages/Structure";
import { Resources } from "./pages/Resources";
import { Volunteer } from "./pages/Volunteer";
import { Contact } from "./pages/Contact";
import { Layout } from "./components/Layout";
import { DataHandling } from "./pages/DataHandling";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "structure", Component: Structure },
      { path: "resources", Component: Resources },
      { path: "volunteer", Component: Volunteer },
      { path: "contact", Component: Contact },
      { path: "data-handling", Component: DataHandling },
    ],
  },
]);
