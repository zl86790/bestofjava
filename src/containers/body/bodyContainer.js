import React from "react";

import BodyComponent from "../../components/body/BodyComponent";
import { getTopJava } from "../../modules/api/Github";

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    const response = await getTopJava();
    console.log(response);
    this.setState({ data: response.data });
  }

  render() {
    return <BodyComponent data={this.state.data} />;
  }
}

export default HeaderContainer;
