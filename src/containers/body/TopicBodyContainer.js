import React from "react";

import BodyComponent from "../../components/body/BodyComponent";
import Banner from "../../components/body/banner/Banner";
import Footer from "../../components/body/footer/Footer";
import { getTopJavaTopic } from "../../modules/api/Github";

class TopicBodyContainer extends React.Component {
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
    const response = await getTopJavaTopic(
      this.props.match.params.language,
      this.props.match.params.topic
    );
    this.setState({ data: response.data });
    this.setState({ displayLoading: "none" });
    this.setState({ displayContent: "" });
  }

  async componentWillReceiveProps(nextProps) {
    this.setState({ displayLoading: "" });
    this.setState({ displayContent: "none" });
    const response = await getTopJavaTopic(
      nextProps.match.params.language,
      nextProps.match.params.topic
    );
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
            topic={this.props.match.params.topic}
            displayLoading={this.state.displayLoading}
            displayContent={this.state.displayContent}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default TopicBodyContainer;
