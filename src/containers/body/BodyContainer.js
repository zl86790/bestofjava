import React from "react";

import BodyComponent from "../../components/body/BodyComponent";
import Banner from "../../components/body/banner/Banner";
import Footer from "../../components/body/footer/Footer";
import { getTopJava } from "../../modules/api/Github";

class BodyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      displayLoading: "",
      displayContent: "none"
    };
  }

  async componentDidMount() {
    this.setState({ displayLoading: "" });
    this.setState({ displayContent: "none" });
    const response = await getTopJava();
    this.setState({ data: response.data });
    this.setState({ displayLoading: "none" });
    this.setState({ displayContent: "" });
  }

  render() {
    return (
      <div className="row no-gutter">
        <div className="main col-md-8 offset-2">
          <Banner />
          <BodyComponent
            data={this.state.data}
            displayLoading={this.state.displayLoading}
            displayContent={this.state.displayContent}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default BodyContainer;
