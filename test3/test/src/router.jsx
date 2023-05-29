import About from "./About";
import Albums from "./Albums";
import Blog from "./ContactDetail";
import Contact from "./Contact";
import Product from "./Product";
import TodoForm from "./AddForm";
import TestReactaFormHook from "./TestReactaFormHook";

export const router = [
  {
    path: "/about",
    element: <About />,
    name: "About",
  },
  {
    path: "/contact",
    element: <Contact />,
    name: "Contact",
  },
  {
    path: "/product",
    element: <Product />,
    name: "Product",
  },
  {
    path: "/album",
    element: <Albums />,
    name: "Albums",
  },
  {
    path: "/blog",
    element: <Blog />,
    name: "Blogs",
  },
  {
    path: "/forms",
    element: <TodoForm />,
    name: "Form",
  },
  {
    path: "/testdemo",
    element: <TestReactaFormHook />,
    name: "Form",
  },
];
