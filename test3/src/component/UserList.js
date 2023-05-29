import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { addUser } from "../store/thunks/AddUser";
import { DeleteUser } from "../store/thunks/DeleteUser";

const UserList = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);
  const [createingUser, setCreateingUser] = useState(false);

  const useThunk = (thunkAction) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const doFetch = useCallback((...args) => {
      setIsLoading(true);
      try {
        dispatch(thunkAction(...args));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    });
    return [doFetch, isLoading, error];
  };
  const [doFetchUsers, isLoading, error] = useThunk(fetchUsers);
  const [doAddUser, isAddingUser, errorAddingUser] = useThunk(addUser);
  const [doDeleteUser, isDeletingUser, errorDeletingUser] =
    useThunk(DeleteUser);

  const handleAddUser = () => {
    doAddUser();
  };
  const handleDeleteUser = (user) => {
    doDeleteUser(user);
  };

  useEffect(() => {
    doFetchUsers();
  }, []);
  if (isLoading)
    return (
      <div>
        <Skeleton times={10} />
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <>
      <Button loading={createingUser} primary rounded onClick={handleAddUser}>
        + Add User
      </Button>

      <div className="flex border p-4 flex-col justify-between m-3 ">
        {data &&
          data.map((user, index) => {
            return (
              <div className="mb-2 border rounded" key={index}>
                <div className="flex p-2 justify-between items-center cursor-pointer">
                  <p>{user.name}</p>
                  <p>{user.username}</p>
                  <p>{user.email}</p>
                  <Button
                    onClick={() => handleDeleteUser(user.id)}
                    secondary
                    className="border rounded"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default UserList;
