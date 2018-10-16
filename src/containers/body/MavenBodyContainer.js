import React from "react";

import BodyComponent from "../../components/body/BodyComponent";
import Banner from "../../components/body/banner/Banner";
import Footer from "../../components/body/footer/Footer";
import { getTopJavaMaven } from "../../modules/api/Github";

class MavenBodyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    const response = await getTopJavaMaven();
    this.setState({ data: response.data });
  }

  render() {
    return (
      <div className="row no-gutter">
        <div className="main col-md-8 offset-2">
          <Banner />
          <BodyComponent data={this.state.data} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default MavenBodyContainer;
