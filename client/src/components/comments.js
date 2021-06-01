import React, { Component } from "react";
import { Form, Input, Button } from "antd";

export default class Comments extends Component {
  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };

    const validateMessages = {
      required: "Name is required!",
      types: {
        email: "Email is not a valid email!"
      },
    };
    const onFinish = (values) => {
      console.log(values);
    };
    return (
      <div className="container">
        <div className="name">
         <h4>Comment</h4> 
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[{ type: "email" }]}
          >
            <Input />
          </Form.Item>
          \
          <Form.Item name={["user", "content"]} label="Nội dung">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      </div>
    );
  }
}
