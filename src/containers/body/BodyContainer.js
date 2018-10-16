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
      display: ""
    };
  }

  async componentDidMount() {
    this.setState({ display: "" });
    const response = await getTopJava();
    this.setState({ data: response.data });
    this.setState({ display: "none" });
  }

  render() {
    return (
      <div className="row no-gutter">
        <div className="main col-md-8 offset-2">
          <Banner />
          <BodyComponent data={this.state.data} display={this.state.display} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default BodyContainer;
