// import { Container } from "postcss";
import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Singleuser from "./Singleuser";

const UserData = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState();
  const url = "https://reqres.in/api/users?page=2";
  const userData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setData(data.data);
  };
  useEffect(() => {
    userData();
  }, []);
  const singleuser = (emep_id) => {
    console.log(emep_id);
    setId(emep_id);
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            {data.map((ele) => {
              return (
                <div key={ele.id} onClick={() => singleuser(ele.id)}>
                  <p>
                    {ele.first_name} {ele.last_name}
                  </p>
                  <img src={ele.avatar} alt={ele.first_name} width={80} />
                </div>
              );
            })}
          </Col>
          <Col>
            <Singleuser emeoid={id} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserData;
