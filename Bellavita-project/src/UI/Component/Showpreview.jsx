import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";

export default function Showpreview({ showprview }) {
  let navigate = useNavigate();

  const [data, setData] = useState();

  const { id } = useParams();

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:9999/product/getProductById/${id}`,
    }).then((res) => {
      console.log("useEffect  res:", res.data.count);
      setData(res.data.data);
    });
  }, []);

  useEffect(() => {
    setData(showprview);
  }, [showprview]);
  return (
    <div>
      <div className="mt-56">
        <p>{data?.title}</p>
        <img src={data?.thumbnail} alt="" srcset="" />
      </div>

      <Button onClick={() => navigate(-1)}>Back</Button>
    </div>
  );
}
