import React, { useEffect, useState } from "react";
import { Button, Input, Table } from "reactstrap";
import { ChevronDown, PencilRuler, Trash } from "lucide-react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./Product.css";
export default function ProductTable({
  getproduct,
  setProduct,
  setUpdate,

  toggle,
  showpreview,
  refetch,
  refetchData,
  setGetproduct,
}) {
  const Edithandler = (data) => {
    toggle();
    setProduct(data);
    setUpdate(true);
  };
  const [opendropdown, setOpendropdown] = useState(false);
  const [dropvalue, setDropvalue] = useState(10);

  const [paginate, setPaginate] = useState({
    limit: 10,
    page: 1,
    totalproduct: 0,
  });
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/product/getAllPaginate",
      params: {
        limit: paginate.limit,
        page: paginate.page,
      },
    })
      .then((res) => {
        console.log("==>my", res.data.count);
        setGetproduct(res.data.data);
        setPaginate({ ...paginate, totalproduct: res.data.count });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refetch]);

  const deletehandler = (id) => {
    axios({
      method: "delete",
      url: `http://localhost:9999/product/delete/${id}`,
    })
      .then((res) => {
        alert("Delete data....!");
        refetchData();
        if (getproduct.length === 1) {
          setPaginate({ ...paginate, page: paginate.page - 1 });
        }
        // setGetproduct(res?.data?.data)
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handlePageClick = (e) => {
    setPaginate({ ...paginate, page: e?.selected + 1 });
    console.log("first", e);
    refetchData();
  };
  let img1 =
    "https://marketplace.canva.com/EAFijA-Es8I/1/0/1600w/canva-beige-minimalist-stay-tuned-coming-soon-instagram-post-iv_vQnhdRkY.jpg";
  const dropdownfun = (item) => {
    setPaginate({ ...paginate, limit: item });
    refetchData();
    setOpendropdown(!opendropdown);
  };

  return (
    <div>
      <div className="dropdownmenu" style={{display:"flex", justifyContent:"end",position:"relative"}} >
        <h6>Set Page Limit :</h6>
        <div style={{border:"1px solid " ,width:"100px",borderRadius:"5px",display:"flex",justifyContent:"center",background:"white" }}>
          
          <div style={{display:"flex", justifyContent:"space-around",width:"100px"}} onClick={() => setOpendropdown(!opendropdown)}>
            <div>

            {paginate.limit} 
            </div>
            <div>

            <ChevronDown />
            </div>
          </div>
          {opendropdown && (
            <div style={{position:"absolute",zIndex:10,border:"1px solid",top:"26px",width:"98px",borderRadius:"5px",background:"white",height:"102px"}}> 
            <ul className="" style={{display:"grid",placeContent:"center",padding:"0px",}}>
              <li onClick={() => dropdownfun(5)}>5</li>
              <li onClick={() => dropdownfun(10)}>10</li>
              <li onClick={() => dropdownfun(20)}>20</li>
              <li onClick={() => dropdownfun(25)}>25</li>
            </ul>
            </div>
          )}
        </div>
      </div>
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>Images</th>
              <th>Brand</th>
              <th>Title</th>
              <th>Offer Price</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {getproduct.map((e, i) => {
              return (
                <tr key={i}>
                  <th scope="row">
                    {i + 1 + (paginate.page - 1) * paginate.limit}
                  </th>
                  {/* <th>{i+1}</th>
                  <th>{"{i+1+(paginate.page-1)*(paginate.limit)}"}</th>
                  <th>{paginate.page-1}</th>
                  <th>{paginate.limit}</th> */}
                  <td>
                    <img
                      style={{ height: "50px", width: "50px" }}
                      src={e?.thumbnail || img1}
                      alt="image not available"
                    />
                  </td>
                  <td>{e.brand}</td>
                  <td>{e?.title || "our product"}</td>
                  <td>
                    <span style={{ color: "green" }}>
                      -{e.discountPercentage || 0}%{" "}
                    </span>{" "}
                    <span style={{ color: "red" }}>
                      {" "}
                      {(
                        e.price -
                        (e.price * e.discountPercentage || 0) / 100
                      ).toFixed(2)}
                    </span>{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      {" "}
                      {e.price}
                    </span>{" "}
                  </td>

                  <td>
                    <div className="d-flex gap-xl-5">
                      <Trash
                        color="red"
                        role="button"
                        onClick={() => deletehandler(e._id)}
                      />
                      <PencilRuler
                        color="#3c93b0"
                        role="button"
                        onClick={() => Edithandler(e)}
                      />
                    </div>
                  </td>
                  <td>
                    <Button
                      style={{ backgroundColor: "black" }}
                      onClick={() => showpreview(e._id)}
                    >
                      Preview
                    </Button>
                  </td>
                  <td>
                    {/* <Button color="danger" onClick={toggle}>
        Click Me
      </Button> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <hr />
        <ReactPaginate
          className="d-flex gap-3 paginate"
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={paginate.totalproduct / paginate.limit}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}
