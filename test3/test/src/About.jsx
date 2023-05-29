import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useDispatch, useSelector } from "react-redux";
import { FetchCommentData } from "./redux/Reducer/TodoSlice";
import { RotatingLines } from "react-loader-spinner";
const About = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  // const ref = useRef(null);
  // const [loadingBarProgress, setLoadingBarProgress] = useState(0);
  // const location = useLocation();
  const [form, setForm] = useState({
    name: "",
    desc: "",
  });
  const [ModalTodo, setModalTodo] = useState("");
  useEffect(() => {
    dispatch(FetchCommentData());
    // console.log(dispatch(FetchCommentData()));
  }, []);
  console.log(todos);

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
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // const HandleSubmit = () => {
  //   dispatch(
  //     addTodo({
  //       name: form.name,
  //       desc: form.desc,
  //     })
  //   );
  // };

  const getId = (id) => {
    setModalTodo(todos.todos.find((item) => item.id === id));
  };
  return (
    <div>
      {/* <LoadingBar progress={loadingBarProgress} /> */}
      <h1>about</h1>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/product">Product</Link>
      {/* <input
        type="text"
        onChange={handleChange}
        value={form.name}
        name="name"
        placeholder="addtodo"
      />
      <input
        onChange={handleChange}
        value={form.desc}
        name="desc"
        type="text"
        placeholder="element"
      />
      // <button onClick={HandleSubmit}>add</button> */}
      {todos.isLoading ? (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      ) : null}
      <div className="container">
        <div className="row g-3">
          {todos.todos.length > 0 &&
            todos.todos.map((element, index) => (
              <div className="col-xl-4" key={index}>
                <div
                  className="p-3"
                  style={{ border: "1px solid gray", borderRadius: "5px" }}
                >
                  <h1>{element.id}</h1>
                  <h3>{element.name}</h3>
                  <p>{element.email}</p>
                  <p>{element.body}</p>
                  <button
                    class="btn btn-primary w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#detail_currier"
                    onClick={() => getId(element.id)}
                  >
                    Click
                  </button>
                </div>
                <div
                  class="modal fade"
                  id="detail_currier"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby={`staticBackdropLabel-${element.id}`}
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1
                          class="modal-title fs-5"
                          id={`staticBackdropLabel-${element.id}`}
                        >
                          {ModalTodo.id}
                        </h1>

                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <h3>{ModalTodo.name}</h3>
                        <p>{ModalTodo.email}</p>
                        <p>{ModalTodo.body}</p>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Understood
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default About;
