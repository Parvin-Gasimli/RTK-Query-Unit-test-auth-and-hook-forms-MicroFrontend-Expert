import React from "react";
import {
  useGetAlbumQuery,
  useGetAlbumsQuery,
  useAddAlbumMutation,
  useDeleteAlbumMutation,
} from "../store/apis/albumsApi";
import Skeleton from "./Skeleton";
import Button from "./Button";

const AlbumList = ({ user }) => {
  const { data, error, isLoading } = useGetAlbumsQuery(user);
  const [addAlbum, result] = useAddAlbumMutation();
  const [deleteAlbum] = useDeleteAlbumMutation();
  const HandleAdd = () => {
    console.log("add album");
    addAlbum({ user });
  };
  const handleDelete = (id) => {
    console.log("delete album");
    deleteAlbum(id);
  };

  let contend;
  if (isLoading) {
    contend = <Skeleton times={4} />;
  } else if (error) {
    contend = <p>{error}</p>;
  } else if (data) {
    contend = data.map((album) => {
      return (
        <div key={album.id} className="card">
          <div className="card-content border-collapse rounded bg-slate-400 m-3 p-5">
            <p className="title">{album.name}</p>
            <p className="title">{album.email}</p>
            <Button
              loading={isLoadings}
              onClick={() => handleDelete(album.id)}
              secondary
            >
              Deleting
            </Button>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="container">
      <Button onClick={HandleAdd} primary>
        +Add Album
      </Button>
      {contend}
    </div>
  );
};

export default AlbumList;
