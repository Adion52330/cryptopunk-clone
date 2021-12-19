import React from "react";
import CollectionCard from "./CollectionCard";
import "./Punklist.css";

const Punklist = ({ punkListData, setSelectedPunk }) => {
  return (
    <div className="punkList">
      {punkListData.map((item, index) => (
        <div className="pointer" onClick={() => setSelectedPunk(item.token_id)}>
          <CollectionCard
            key={index}
            id={index}
            name={item.name}
            traits={item.traits}
            image={item.image_original_url}
          />
        </div>
      ))}
    </div>
  );
};

export default Punklist;
