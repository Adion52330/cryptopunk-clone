import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import Punklist from "./components/Punklist";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNFTs = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x47F195B993C5aea60Cde535007B2f43A6cFfccAc&order_direction=asc"
      );
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };
    return getMyNFTs();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <div>
          <Main selectedPunk={selectedPunk} punkListData={punkListData} />
          <Punklist
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </div>
      )}
    </div>
  );
}

export default App;
