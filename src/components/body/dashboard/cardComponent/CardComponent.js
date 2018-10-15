import React from "react";
import "./css/cardComponentStyle.css";

const CardComponent = props => {
  return (
    <div className="cardComponentStyle col-md-5">
      <div className="row cardComponentTitle" fill="rgb(250, 158, 89)">
        <div className="col-md-2">
          <img src={props.image} width={50} style={{ marginTop: 10 }} />
        </div>
        <div className="col-md-7 text-center" style={{ margin: "auto" }}>
          <div className="">{props.title}</div>
        </div>
        <div className="col-md-3 text-center" style={{ margin: "auto" }}>
          <div className="">
            {props.stars}
            &nbsp;
            <svg
              className="octicon octicon-star"
              viewBox="0 0 14 16"
              version="1.1"
              width="14"
              height="16"
              aria-hidden="true"
              fill="rgb(250, 158, 89)"
            >
              <path
                fillRule="evenodd"
                d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="row top-gray-line" style={{ padding: 15, height: 120 }}>
        {props.content}
      </div>
      <div className="row top-gray-line" style={{ padding: 15 }}>
        Owner:&nbsp;
        {props.owner}
      </div>
    </div>
  );
};
export default CardComponent;
