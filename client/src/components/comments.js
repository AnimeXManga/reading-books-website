import React, { Component } from "react";
import { Comment, Form, Button, List, Input, Tooltip } from "antd";
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import moment from "moment";
import "moment/locale/vi";
import {
  getCommentList,
  postComments,
} from "../redux/comments/comments.actions";
import { connect } from "react-redux";
import _ from "lodash";

const mapStateToProps = (state) => ({
  commentList: state.comments.commentList,
  submiting: state.comments.submiting,
  userId: state.users.id,
});

const mapDispatchToProps = {
  getCommentList,
  postComments,
};

const { TextArea } = Input;

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
    };
  }

  onSubmit = () => {
    const id = localStorage.getItem("currentChapter");
    const userId = localStorage.getItem("userId");

    if (!this.state.body) {
      return;
    }

    const body = {
      post: id,
      author: userId,
      body: this.state.body,
    };
    this.props.postComments(id, body).then((data) => {
      if (data.status === 200) {
        this.setState({ body: "" });
        notification.open({
          message: "Thông báo",
          description: 'Bình luận thành công',
          icon: <SmileOutlined style={{ color: "#108ee9" }} />,
        });
      } else {
        notification.open({
          message: "Thông báo",
          description: "Bình luận thất bại",
          icon: <SmileOutlined style={{ color: "#108ee9" }} />,
        });
      }
    });
  };

  onChange = (e) => {
    this.setState({
      body: e.target.value,
    });
  };

  componentDidMount() {
    const id = localStorage.getItem("currentChapter");
    this.props.getCommentList(id);
  }

  render() {
    const { body } = this.state;
    const { commentList, submiting } = this.props;
    let renderItem;

    if (!_.isEmpty(commentList)) {
      const data = commentList.map((item, index) => {
        const date = new Date(item.date);
        const year = date.getFullYear();
        const month =
          date.getMonth() + 1 < 10
            ? `0${date.getMonth() + 1}`
            : date.getMonth() + 1;
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        return {
          author: item.author,
          avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content: <p>{item.body}</p>,
          datetime: (
            <Tooltip title={moment(item.date).locale("vi").format("llll")}>
              <span>
                {moment(
                  `${year}${month}${day}${hour}${minute}`,
                  "YYYYMMDDhmm"
                ).fromNow()}
              </span>
            </Tooltip>
          ),
        };
      });

      renderItem = (
        <>
          <List
            className="comment-list"
            header={`${commentList.length} replies`}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <li>
                <Comment
                  actions={item.actions}
                  author={item.author}
                  avatar={item.avatar}
                  content={item.content}
                  datetime={item.datetime}
                />
              </li>
            )}
          />
        </>
      );
    }
    return (
      <>
        {renderItem}
        <Comment
          content={
            <>
              <Form.Item>
                <TextArea
                  rows={4}
                  onChange={(e) => this.onChange(e)}
                  value={body}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  htmlType="submit"
                  loading={submiting}
                  onClick={() => this.onSubmit()}
                  type="primary"
                >
                  Add Comment
                </Button>
              </Form.Item>
            </>
          }
        />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
