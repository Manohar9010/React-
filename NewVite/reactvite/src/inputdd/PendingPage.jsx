import React, { useEffect, useState } from "react";
import { Button, Input } from "reactstrap";
import Swal from "sweetalert2";

export default function PendingPage({
  user,
  setUser,
  pending,
  setPending,
  done,
  setDone,
}) {
  const [singlecheck, setSinglecheck] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let jsondata = localStorage.getItem("pending") || "[]";

    let normaldat = JSON.parse(jsondata);
    setPending(normaldat);
  }, []);

  const singledatamove = (item) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You want Move this Data  to Done List",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Moved it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Move data to Done List!",
            text: "Your file has been Moved.",
            icon: "success",
          });
          setDone([...done, pending[item]]);
          let data = pending.filter((e, i) => i !== item);
          setPending(data);

          localStorage.setItem("pending", JSON.stringify(data));
          localStorage.setItem(
            "donelocal",
            JSON.stringify([...done, pending[item]])
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your file not moved:)",
            icon: "error",
          });
        }
      });
  };
  const pendinselect = (items) => {
    if (singlecheck.includes(items)) {
      let filterdata = singlecheck.filter((e) => e !== items);
      setSinglecheck(filterdata);
    } else {
      setSinglecheck([...singlecheck, items]);
      console.log("checkbox", [...singlecheck, items]);
    }
  };
  const moveallfun = () => {
    let full = [];
    let empty = [];

    pending.map((ele, i) => {
      if (singlecheck.includes(i)) {
        full.push(ele);
      } else {
        empty.push(ele);
      }

      setDone([...done, ...full]);
      setPending(empty);
      setSinglecheck([]);
      localStorage.setItem("pending", JSON.stringify(empty));
      localStorage.setItem("donelocal", JSON.stringify([...done, ...full]));
    });
  };

  const selecallfun = (item) => {
    if (item) {
      setSinglecheck(pending.map((e, i) => i));
    } else {
      setSinglecheck([]);
    }
  };
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("pending") || "[]");
    let fillterdata = data.filter((e, i) => e.includes(search));
    setPending(fillterdata);
  }, [search]);
  return (
    <div>
      <div
        className=" border border-info-subtle rounded p-3"
        style={{ width: "400px" }}
      >
        <div className="d-flex gap-2 mx-3">
          <Input
            placeholder="Search"
            type="text"
            onChange={(e) => setSearch(e?.target?.value)}
          />
          <Input
            style={{ width: "25px", height: "20px" }}
            type="checkbox"
            checked={
              pending.length === singlecheck.length && pending.length > 0
            }
            onChange={(ell) => selecallfun(ell.target.checked)}
          />
        </div>
        {pending.map((e, i) => {
          return (
            <div
              key={i}
              className="d-flex align-baseline justify-content-center p-2 gap-1 border border-info rounded m-1 "
            >
              <div
                className=" mt-1 "
                style={{ width: "380px", overflow: "hidden" }}
              >
                {e}
              </div>
              <div>
                <Button onClick={() => singledatamove(i)}>movedata</Button>
              </div>
              <div>
                <Input
                  type="checkbox"
                  checked={singlecheck.includes(i)}
                  onChange={() => pendinselect(i)}
                  style={{ width: "25px", height: "25px" }}
                />
              </div>
            </div>
          );
        })}

        <div className="mt-2">
          <Button onClick={() => moveallfun()}>moveall</Button>
        </div>
      </div>
    </div>
  );
}
