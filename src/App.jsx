import Form from './components/Form'
import Address from './components/Address';
import Map from './components/Map'

function App(){
    // https://geo.ipify.org/api/v2/country,city?apiKey=at_p2O6hFhoq9CNuHolnpSxnRtUaozq4&ipAddress=8.8.8.8
// 
  return(
    <div>
      <Form />
      <Address />
      <Map />
    </div>
  )
}
export default App;