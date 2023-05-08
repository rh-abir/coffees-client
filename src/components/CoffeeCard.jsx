import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, chef, taste, photo } = coffee;

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {


            if (data.deletedCount > 0) {
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
            }
          }
        });
      });
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className=" flex justify-between items-center w-full ">
          <div>
            <h2 className="card-title">Name : {name}</h2>
            <p> Taste: {taste}</p>
            <p>Price : {chef}</p>
          </div>
          <div className="card-actions justify-end pr-10">
            <div className="btn-group btn-group-vertical space-y-3">
              <button className="btn ">Visite</button>
              <Link to={`updateCoffee/${_id}`} className="btn">edite</Link>
              <button onClick={() => handleDelete(_id)} className="btn">
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
