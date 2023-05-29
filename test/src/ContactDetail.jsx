import React from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";

const ContactDetail = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery("repoData2", () =>
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
      res.json()
    )
  );

  return (
    <div>
      <Link to="/contact">Contact</Link>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div>
          <h1>{data.id}</h1>
          <h1>{data.name}</h1>
        </div>
      )}
    </div>
  );
};

export default ContactDetail;
