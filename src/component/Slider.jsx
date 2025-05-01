import React from "react";
import { useMemo } from "react";
const Images = [
  "/Images/six.png",
  "Images/seven.png",
  "Images/eight.png",
  "Images/eight.png",
  "Images/eight.png",
];

const Slider = () => {
  const idxs = useMemo(() => {
    const imageIdxs = [];
    function addNewBatch() {
      const offset = imageIdxs.length; // the next batch should start from the last batch
      [...Array(5)].forEach((_, i) => {
        imageIdxs.push((i + offset) % Images.length);
      });
    }
    addNewBatch();

    const format = imageIdxs.join();

    // keep adding a new batch until the last batch is the same as the first batch.
    function duplicate() {
      addNewBatch();
      if (imageIdxs.join().endsWith(format)) return;
      duplicate();
    }
    duplicate();

    return imageIdxs;
  }, []);
  return (
    <div className="images">
      <div className="image-container">
        {idxs.map((i, key) => (
          <div key={key}>
            <img src={Images[i]} alt="wizkid" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
