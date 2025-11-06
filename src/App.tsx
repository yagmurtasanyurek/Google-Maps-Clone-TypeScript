import LocationSearch from "./components/LocationSearch";
import Map from "./components/Map";

function App() {
  return (
    <div className="h-screen w-screen grid grid-cols-12">
      <div className="col-span-3 p-2">
        <LocationSearch />
      </div>
      <div className="col-span-9"></div>
      <Map />
    </div>
  );
}

export default App;
