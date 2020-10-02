import React, { Component } from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";

class SocialMediaButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      href: "",
    };
  }

  componentDidMount() {
    const href = window.location.href;
    this.setState({ href });
  }
  render() {
    const { href } = this.state;
    return (
      <FacebookShareButton
        url="https://htblog.tech/post/tim-hieu-promise-trong-javascript.5f75e57cefdb7c34dc14c336"
        quote={"BlogHT - Chia sẻ kiến thức"}
        hashtag="#HTBlog"
      >
        <FacebookIcon size={36} />
      </FacebookShareButton>
    );
  }
}

export default SocialMediaButtons;
