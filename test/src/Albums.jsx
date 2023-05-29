import React from "react";
import {
  useGetAllAlbumsQuery,
  useDeleteAlbumsMutation,
} from "./redux/features/api/Albums";

const Albums = () => {
  const { data, isError, isSuccess, isLoading } = useGetAllAlbumsQuery();

  let content;
  if (isLoading) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "200px", height: "200px" }}
          src="https://i.gifer.com/7Pzx.gif"
        />
      </div>
    );
  } else if (isError) {
    return <div>Error...</div>;
  } else if (isSuccess) {
    content =
      data &&
      data.data.map((item, index) => {
        return (
          <div key={item.id}>
            <h1>{index}</h1>
            <h1>{item.name}</h1>
            <h1>{item.email}</h1>
          </div>
        );
      });
  }

  return <div>{content}</div>;
};

export default Albums;
