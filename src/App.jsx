import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loaderCoffees = useLoaderData();  
  const [coffees, setCoffees] = useState(loaderCoffees)
  console.log(coffees)
  return (
    <div className="m-20">
      <h1 className="text-6xl mb-10">Our Popular Product : {coffees.length}</h1>

      {/* single cofffee card */}
      <div className="grid grid-cols-2 gap-10">
        {coffees.map((coffee) => (
          <CoffeeCard
          key={coffee._id}
          coffee = {coffee}
          coffees = {coffees}
          setCoffees = {setCoffees}
           ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
