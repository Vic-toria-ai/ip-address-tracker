import Form from "./components/Form";
import Address from "./components/Address";
import Map from "./components/Map";
import { useState, useEffect } from "react";

function App() {
  const [address, setAddress] = useState(null);
  const [ipAddress, setIpAddress] = useState("");
  const fetchData = async () => {
    try {
      // i stored the ApI key (.env file) in a variable before fectching the api, it is not necessary compulsory, but it makes the code cleaner. Also, i saved my .env file using VITE because that was what I used to set up react.
      const apiKey = import.meta.env.VITE_API_KEY;
      //  I passed my url with a string (template literals) because i wanted to reference my api key that was stored in  a variable earlier.
      const response = await fetch();
      //   `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=8.8.8.8`,
      // console.log(response.status)
      const data = await response.json();
      console.log(data);
      setAddress(data);
    } catch (error) {
      console.warn(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Form
        ipAddress={ipAddress}
        setIpAddress={setIpAddress}
        fetchData={fetchData}
      />
      <Address />
      <Map address={address} />
    </div>
  );
}
export default App;
