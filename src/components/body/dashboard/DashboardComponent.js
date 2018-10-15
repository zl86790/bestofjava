import React from "react";
import CardComponent from "./cardComponent/CardComponent";
import "./css/dashboardStyle.css";

const DashboardComponent = props => {
  return (
    <div>
      <div className="dashboardTitleStyle row">
        <div style={{ marginTop: -5, marginLeft: 15, marginRight: 15 }}>
          <svg
            width="22"
            class="octicon octicon-flame"
            viewBox="0 0 12 16"
            version="1.1"
            aria-hidden="true"
            fill="rgb(250, 158, 89)"
          >
            <path
              fill-rule="evenodd"
              d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"
            />
          </svg>
        </div>
        <div>Today Hot Projects</div>
      </div>
      <div>
        <CardComponent
          title="Walt"
          image="https://avatars.githubusercontent.com/u/37333181?v=3&s=75"
          stars="25"
          content="A test message here"
        />
        <CardComponent
          title="30 seconds of code"
          image="https://avatars.githubusercontent.com/u/37333181?v=3&s=75"
          stars="25"
          content="A test message here"
        />
        <CardComponent
          title="Test"
          image="https://avatars.githubusercontent.com/u/37333181?v=3&s=75"
          stars="25"
          content="A test message here"
        />
      </div>
    </div>
  );
};
export default DashboardComponent;
