import Form from "./components/Form";
import Address from "./components/Address";
import Map from "./components/Map";
import { useState, useEffect } from "react";

function App() {
  const [address, setAddress] = useState(null);
  const [userIpAddress, setUserIpAddress] = useState("");
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  async function fetchForIp(ipAddress) {
    try {
      // getting apiKey from .env file
      const apiKey = import.meta.env.VITE_API_KEY;
      // forming url with parameters
      const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`
      // fetching data from API server
      const response = await fetch(url);
      console.log("Look here: ", response.ok, response.status);
      const result = await response.json();
      
      if (response.ok) {
        // if no error then:
        setError(null)
        // logging API response to the console
        console.log(result);
        // setting position state
        setPosition([result.location.lat, result.location.lng]);
        // setting address state
        setAddress(result);
      } else {
        setPosition(null)
        setAddress(null)
        setError(result.messages)
        // clear the input when user start typing again.
        setUserIpAddress("")
      }
    } catch (err) {
      console.warn(err.message);
    }
  }

  useEffect(() => {
    fetchForIp(userIpAddress);
  }, []);

  return (
    <div>
      <Form
        ipAddress={userIpAddress}
        setIpAddress={setUserIpAddress}
        fetchData={fetchForIp}
        error={error}
        setError={setError}
      />
      <Address address={address}  />
      <Map position={position} address={address} />
    </div>
  );
}

export default App;
