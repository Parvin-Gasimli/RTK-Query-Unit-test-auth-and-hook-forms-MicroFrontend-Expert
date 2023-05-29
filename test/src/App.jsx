import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import { router } from "./router";
import { useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import {
  useGetAllAlbumsQuery,
  useDeleteAlbumsMutation,
  useGetAllAlbumMutation,
} from "./redux/features/api/Albums";
import About from "./About";
import Contact from "./Contact";
import Blog from "./ContactDetail";
import ContactDetail from "./ContactDetail";
import TodoForm from "./AddForm";
import TestReactaFormHook from "./TestReactaFormHook";
const App = () => {
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [items, setItems] = useState([]);
  // const { data, isError, isLoading, isSuccess } = useGetAllAlbumsQuery();
  // const { data: getAlbum } = useGetAllAlbumMutation();
  // console.log(getAlbum);
  // const [deleteAlbums] = useDeleteAlbumsMutation();
  // const HandleDelete = (id) => {
  //   deleteAlbums(id);
  // };
  // console.log(data);
  // if (isLoading) return <div>Loading...</div>;
  // if (isSuccess) {
  //   var albums;
  //   <div className="container">
  //     <div className="row">
  //       {
  //         (albums = data.map((album, index) => {
  //           return (
  //             <div className="col-md-2" key={index}>
  //               <div className="card mb-4 shadow-sm">
  //                 <h1>{album.id}</h1>
  //                 <div className="card-body">
  //                   <p className="card-text">{album.title}</p>
  //                   <div className="d-flex justify-content-between align-items-center">
  //                     <div className="btn-group">
  //                       <button
  //                         type="button"
  //                         className="btn btn-sm btn-outline-secondary"
  //                       >
  //                         View
  //                       </button>
  //                       <button
  //                         type="button"
  //                         className="btn btn-sm btn-outline-secondary"
  //                         onClick={() => HandleDelete(album.id)}
  //                       >
  //                         Delete
  //                       </button>

  //                       <div />
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           );
  //         }))
  //       }
  //     </div>
  //   </div>;
  // }

  // const [loadingBarProgress, setLoadingBarProgress] = useState(0);
  // const location = useLocation();

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setLoadingBarProgress((prevProgress) => {
  //       if (prevProgress >= 100) {
  //         clearInterval(timer);
  //         return 0;
  //       } else {
  //         const diff = Math.random() * 10;
  //         return prevProgress + diff;
  //       }
  //     });
  //   }, 500);

  //   return () => clearInterval(timer);
  // }, [location]);
  return (
    <div>
      {/* <LoadingBar color="#f11946" ref={ref} /> */}
      {/* <BrowserRouter>
        <Routes>
          {router.map((element, index) => (
            <Route key={index} path={element.path} element={element.element} />
          ))}
        </Routes>
      </BrowserRouter> */}
      {/* {albums} */}
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:id" element={<ContactDetail />} />
        <Route path="/from" element={<TodoForm />} />
        <Route path="/testdemo" element={<TestReactaFormHook />} />
      </Routes>
    </div>
  );
};

export default App;
