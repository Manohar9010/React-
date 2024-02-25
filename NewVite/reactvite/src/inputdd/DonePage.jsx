import { Search, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Input } from "reactstrap";
import Swal from "sweetalert2";

export default function DonePage({
  user,
  setUser,
  pending,
  setPending,
  done,
  setDone,
}) {
  const [dsinglechec, setSinglechek] = useState([]);
  const [doneseacrch, setDoneseacrch] = useState("");
  const singlemove = (item) => {
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
        text: "You want Move this data to Pending List!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, MOved it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Data Moved to Pending List ",
            text: "Your file has been  moved.",
            icon: "success",
          });
          setPending([...pending, done[item]]);
          let data = done.filter((e, i) => i !== item);
          setDone(data);
          localStorage.setItem(
            "pending",
            JSON.stringify([...pending, done[item]])
          );
          localStorage.setItem("donelocal", JSON.stringify(data));
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is not send:)",
            icon: "error",
          });
        }
      });
  };

  useEffect(() => {
    let josndata = localStorage.getItem("donelocal") || "[]";
    let normal = JSON.parse(josndata);
    setDone(normal);
  }, []);
  const donesingleval = (item) => {
    if (dsinglechec.includes(item)) {
      let filldata = dsinglechec.filter((e, i) => i !== item);
      setSinglechek(filldata);
    } else {
      setSinglechek([...dsinglechec, item]);
    }
  };
  const donemoveall = () => {
    let full = [];
    let empty = [];
    done.map((e, i) => {
      if (dsinglechec.includes(i)) {
        full.push(e);
      } else {
        empty.push(e);
      }

      setPending([...pending, ...full]);
      setDone(empty);
      setSinglechek([]);

      localStorage.setItem("pending", JSON.stringify([...pending, ...full]));
      localStorage.setItem("donelocal", JSON.stringify(empty));
    });
  };

  const selectallfun = (item) => {
    if (item) {
      setSinglechek(done.map((e, i) => i));
    } else {
      setSinglechek([]);
    }
  };

  const deletesigle = (item) => {
    let filterdata = done.filter((e, i) => i !== item);
    setDone(filterdata);
    localStorage.setItem("donelocal", JSON.stringify(filterdata));
    toast.error("Your Data Deleted");
  };
  const deleallfun = () => {
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
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          setDone([]);
          localStorage.setItem("donelocal", JSON.stringify([]));
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  const searcbutton = () => {
    let data = JSON.parse(localStorage.getItem("donelocal") || "[]");

    let fillterdata = data.filter((e, i) => e.includes(doneseacrch));
    setDone(fillterdata);
  };
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("donelocal") || "[]");
    if (doneseacrch.length === 0) {
      setDone(data);
    }
  }, [doneseacrch]);
  return (
    <div>
      <div
        className="border border-info-subtle  rounded p-3"
        style={{ width: "400px" }}
      >
        <div className="d-flex gap-2 mx-3">
          <Input
            type="text"
            onChange={(e) => setDoneseacrch(e?.target?.value)}
            placeholder="Search"
          />
          <Button onClick={() => searcbutton()}>
            <Search color="white" />
          </Button>
          <Button onClick={() => deleallfun()}>
            {" "}
            <div className="d-flex">
              All <Trash2 color="#faf5f5" />
            </div>
          </Button>
          <Input
            type="checkbox"
            style={{ height: "20px", width: "25px" }}
            checked={done.length === dsinglechec.length && done.length > 0}
            onChange={(ell) => selectallfun(ell?.target?.checked)}
          />
        </div>

        {done.map((e, i) => {
          return (
            <div
              key={i}
              className="d-flex align-baseline justify-content-center p-2 gap-1 border border-info rounded m-1"
            >
              <div className="" style={{ width: "380px", overflow: "hidden" }}>
                {e}
              </div>

              <div className="d-flex gap-2">
                <Button onClick={() => singlemove(i)}>movedata</Button>
                <Button onClick={() => deletesigle(i)}>
                  <Trash2 color="#faf5f5" />
                </Button>
              </div>
              <div>
                <Input
                  onChange={() => donesingleval(i)}
                  type="checkbox"
                  checked={dsinglechec.includes(i)}
                  style={{ width: "25px", height: "25px" }}
                />
              </div>
            </div>
          );
        })}

        <Button onClick={() => donemoveall()}>moveall</Button>
      </div>
    </div>
  );
}
