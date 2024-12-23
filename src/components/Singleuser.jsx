import React, { useEffect, useState } from "react";

const Singleuser = (props) => {
  const [data, setData] = useState([]);
  const url = `https://reqres.in/api/users/${props.emeoid}`;
  const userData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setData(data.data);
  };
  useEffect(() => {
    userData();
  }, [props]);
  return (
    <>
      <h2>
        {data?.first_name} {data?.last_name}
      </h2>
      <img src={data?.avatar} alt={data?.first_name} />
    </>
  );
};

export default Singleuser;
