import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const loadedCoffee = useLoaderData();
//   console.log(loadedCoffee);

const { _id, name, chef, supplier, taste, cetegory, details, photo} = loadedCoffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const cetegory = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updeteCoffee = {
      name,
      chef,
      supplier,
      taste,
      cetegory,
      details,
      photo,
    };

    // console.log(updeteCoffee);

    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updeteCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Don",
          });
        }
      });
  };

  return (
    <div className="p-20 bg-[#F4F3F0]">
      <div>
        <h2 className="text-5xl text-center">Update a Coffee</h2>
        
      </div>

      <form onSubmit={handleUpdateCoffee}>
        {/* input name and chef */}
        <div className="flex gap-7 mt-20">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="coffee name"
                defaultValue={name}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="chef"
                placeholder="Chef"
                defaultValue={chef}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* input supplier and taste */}
        <div className="flex gap-7">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                placeholder="Supplier"
                defaultValue={supplier}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                placeholder="Taste"
                defaultValue={taste}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* input category and details */}
        <div className="flex gap-7">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Category"
                defaultValue={cetegory}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Details"
                defaultValue={details}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* input photo URL */}
        <div className="flex gap-7 mb-5">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Photo"
                defaultValue={photo}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input type="submit" value="Add Coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default UpdateCoffee;
