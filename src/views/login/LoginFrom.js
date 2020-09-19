import React, {Component, Fragment} from "react";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  message
} from "antd";
import {UserAddOutlined, LockOutlined} from "@ant-design/icons";
import FormItem from "antd/lib/form/FormItem";
import {validate_password, validate_email} from "../../utils/validate"
import {Login, GetCode} from '../../api/account';

class LoginFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      code_button_disabled: false,
      code_button_loading: false,

      code_button_text: '获取验证码'


    };
  }
  // 登录
  onFinish = (values) => {
    Login().then(response => {
      console.log(response)

    }).catch(error => {})
    console.log("Received values of form: ", values);
  }
  // 获取验证码
  getCode = () => {

    if (!this.state.username) {
      message.warning('用户名不能为空', 1)
      return false
    }
    this.setState({code_button_loading: true, code_button_text: '发送中'})
    const requestData = {
      username: this.state.username,
      module: 'login'
    }
    GetCode(requestData).then(response => {
      this.countDown()
      if (response.resCode == 0) {} else {

        message.error(response.data.message)
      }
    }).catch(error => {
      this.setState({code_button_loading: false, code_button_text: '重新获取'})


    })

  }

  // input输入处理
  inputChange = (e) => {
    let value = e.target.value
    console.log(value)
    this.setState({username: value})


  }

  /* 倒计时 */
  countDown = () => {
    console.log('倒计时')
    let sec = 60;
    // 定时器
    let timer = null;
    this.setState({code_button_loading: false, code_button_text: '60s', code_button_disabled: `${sec}S`})
    // setInterval   不间断定时器
    // setTimeout   只执行一次
    timer = setInterval(() => {

      sec--;
      if (sec <= 0) {

        this.setState({code_button_text: "重新获取", code_button_disabled: false})
        clearInterval(timer);
        return false

      }
      this.setState({code_button_text: `${sec}S`})

    }, 1000);


  }
  // 点击账号注册  子组件调用父组件定义的方法 传值
  toggleForm = () => {
    this.props.switchFrom('register')
  }
  render() {
    const {username, code_button_disabled, code_button_loading, code_button_text} = this.state
    // const _this= this
    return (<Fragment>
      <div className="form-warp">
        <div>
          <div className="form-header">
            <h4 className="column">登录</h4>
            <span onClick={
              this.toggleForm
            }>账号注册</span>
          </div>
          <div className="form-content">
            <Form name="normal_login" className="login-form"
              initialValues={
                {remember: true}
              }
              onFinish={
                this.onFinish
            }>
              <Form.Item name="username"
                rules={
                  [
                    {
                      required: true,
                      message: "邮箱不能为空!"
                    }, {
                      type: 'email',
                      message: "邮箱格式不正确!"
                    }
                    // ({ getFieldValue }) => ({
                    // validator(rule, value) {
                    //     if(validate_email(value)){
                    //       _this.setState({
                    //         code_button_disabled:false
                    //       })
                    //       return Promise.resolve();
                    //     }

                    //     return Promise.reject('邮箱格式不正确!');
                    // },
                    // }),
                  ]
              }>
                <Input value={username}
                  onChange={
                    this.inputChange
                  }
                  prefix={
                    <UserAddOutlined
                  className="site-form-item-icon"/>
                  }
                  placeholder="email"/>
              </Form.Item>
              <Form.Item name="password"
                rules={
                  [
                    {
                      required: true,
                      message: "密码不能为空!"
                    }, {
                      pattern: validate_password,
                      message: "至少6-20个字符，至少1个大写字母，1个小写字母和1个数字"
                    }
                  ]
              }>
                <Input prefix={
                    <LockOutlined
                  className="site-form-item-icon"/>
                  }
                  type="password"
                  placeholder="Password"/>
              </Form.Item>
              <Form.Item name="code"
                rules={
                  [{
                      required: true,
                      message: "验证码不能为空!"
                    },]
              }>
                <Row gutter={13}>
                  <Col span={15}>
                    <Input prefix={
                        <LockOutlined
                      className="site-form-item-icon"/>
                      }
                      placeholder="code"></Input>
                  </Col>
                  <Col span={9}>
                    <Button type="danger"
                      loading={code_button_loading}
                      onClick={
                        this.getCode
                      }
                      block
                      disabled={code_button_disabled}> {code_button_text} </Button>
                  </Col>
                </Row>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" block>
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </Fragment>);
  }
}
export default LoginFrom;
