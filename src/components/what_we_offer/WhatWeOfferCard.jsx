import "./what_we_offer.scss";

export default function WhatWeOfferCard({
  image,
  header,
  list1,
  list2,
  list3,
  list4,
  list5,
}) {
  return (
    <div className="what_we_offer">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="texts">
        <h5>{header}</h5>
        <ul>
          {list1 && <li>{list1 && list1}</li>}
          {list2 && <li>{list2}</li>}
          {list3 && <li>{list3 && list3}</li>}
          {list4 && <li>{list4 && list4}</li>}
          {list5 && <li>{list5 && list5}</li>}
        </ul>
      </div>
    </div>
  );
}
