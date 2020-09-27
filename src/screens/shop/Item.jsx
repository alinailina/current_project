import React, { useState } from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { title, images } = item.fields;

  const img1 = images[0].fields.file.url;
  const img2 = images[1].fields.file.url;
  const [img, setImg] = useState(img1);

  return (
    <div>
      <Link to={{ pathname: "/itemdetails", state: { item: item } }}>
        <img
          src={img}
          onMouseEnter={() => {
            setImg(img2);
          }}
          onMouseOut={() => {
            setImg(img1);
          }}
          alt="item"
        />
      </Link>
      <div>
        <p>{title}</p>
        <p>Цена: 12345 ₽</p>
      </div>
    </div>
  );
};

export default Item;
