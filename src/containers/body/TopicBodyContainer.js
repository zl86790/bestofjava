import React from "react";

import BodyComponent from "../../components/body/BodyComponent";
import Banner from "../../components/body/banner/Banner";
import Footer from "../../components/body/footer/Footer";
import { getTopJavaTopic } from "../../modules/api/Github";

class TopicBodyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentWillReceiveProps() {
    const response = await getTopJavaTopic(this.props.match.params.topic);
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

export default TopicBodyContainer;
