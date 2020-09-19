import React, {Component} from "react";
import "./index.scss";
import LoginFrom from "./LoginFrom"
import RegsterForm from "./RegsterForm"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: 'login'
    };
  }
  // 父组件接收子组件传过来的值
  switchFrom = (value) => {
    console.log(value)
    //重新赋值
    this.setState({
      formType:value
    })

  }
  render() {
    return (
      <div> {
        this.state.formType ==='login' ? <LoginFrom switchFrom={this.switchFrom} ></LoginFrom> : <RegsterForm switchFrom={this.switchFrom}></RegsterForm>
      } </div>
    );
  }
}
export default Login;
