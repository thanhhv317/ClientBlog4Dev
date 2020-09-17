import React, { Component } from "react";
import {  Link } from "react-router-dom";
import moment from "moment";

class PostItem extends Component {

  render() {
    const { post } = this.props;
    return (
      <div>
        <div className="post-preview">
          <Link to={`/post/${post.slug}.${post._id}`}>
            <h2 className="post-title">{post.title}</h2>
            <h3 className="post-subtitle">
              {post.content.replace(/<[^>]*>/g, "").substr(0, 120) + "..."}
            </h3>
          </Link>
          <p className="post-meta">
            Đăng bởi
            <b> {post.authorId.username} </b>
            lúc {moment(post.createAt).format('hh:mm DD/MM/YYYY')}
          </p>
        </div>
        <hr />
      </div>
    );
  }
}

export default PostItem;