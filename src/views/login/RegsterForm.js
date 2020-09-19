import React, { Component, Fragment } from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { UserAddOutlined, LockOutlined } from "@ant-design/icons";
import FormItem from "antd/lib/form/FormItem";
class RegsterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  toggleForm=()=>{
    this.props.switchFrom('login')
    console.log('zhanghaozhuce')
  }
  render() {
    return (
      <Fragment>
        <div className="form-warp">
          <div>
            <div className="form-header">
              <h4 className="column">注册</h4>
              <span onClick={this.toggleForm}>登录</span>
            </div>
            <div className="form-content">
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: "Please input your Username!" },
                  ]}
                >
                  <Input
                    prefix={<UserAddOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your Password!" },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your Password!" },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <FormItem>
                  <Row gutter={13}>
                    <Col span={15}>
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        placeholder="code"
                      ></Input>
                    </Col>
                    <Col span={9}>
                      <Button type="danger" block>
                        获取验证码
                      </Button>
                    </Col>
                  </Row>
                </FormItem>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    block
                  >
                    注册
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default RegsterForm;
