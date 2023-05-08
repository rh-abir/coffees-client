import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const loaderCoffees = useLoaderData();  

  return (
    <div className="m-20">
      <h1 className="text-6xl mb-10">Our Popular Product : {loaderCoffees.length}</h1>

      {/* single cofffee card */}
      <div className="grid grid-cols-2 gap-10">
        {loaderCoffees.map((coffee) => (
          <CoffeeCard
          key={coffee._id}
          coffee = {coffee}
           ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
