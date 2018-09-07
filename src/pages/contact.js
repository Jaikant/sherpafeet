import Layout from "../components/Layout";
import React,{Component} from 'react';
import FaMobile from "react-icons/lib/fa/mobile";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Select,
  Checkbox,
  Button,
 
 
} from "antd";
import { Heading, Text, NavLink, Flex,Box } from "rebass";
import IoEmail from "react-icons/lib/io/email";

// import {
//   Box,
//   Heading,
//   Row,
//   Column,
//   Text,
//   NavLink,
//   Border,
//   Textarea,
//   Flex
// } from "rebass";
// import IoEmail from "react-icons/lib/io/email";

const StyledHeading = Box.extend`
  position: relative;
  z-index: 1;
  display: inline-block;
  margin-bottom: 15px;
  color: #333;
  text-align: center;
  font-size: 100%;
  ::before {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    margin-top: -5px;
    margin-left: -40px;
    width: 80px;
    height: 10px;
    background-color: #fff;
    content: "";
  }
  ::after {
    position: absolute;
    top: 50%;
    right: 18%;
    z-index: -2;
    display: block;
    width: 80%;
    margin-right: -40px;
    border-bottom: 1px solid #ddd;
    content: "";
  }
`;

const FormItem = Form.Item;
const Option = Select.Option;

const { TextArea } = Input;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  render() {
    console.log("props", this.props);
    console.log("form props", this.props.form);
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "86" 
    })(
      <Select style={{ width: 70 }} >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
        <Option value="91">+91</Option>
      </Select>
    );
    
    

    return (
      <Layout>
        <Flex
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          <Heading
            children="Our address is"
            m={[3, 4]}
            
            color="#757575"
            fontSize={24}
          />
          <Text my={1} fontSize={"14px"} >
            1st Stage, 4th Block
          </Text>
          <Text my={1} fontSize={"14px"}>
            HBR Layout, Bangalore - 560043
          </Text>
          <Text my={1} fontSize={"14px"}>
            Karnataka, India
          </Text>

          <Text my={1} fontSize={"14px"}>
            <FaMobile fontSize={"18px"} />
            9886106999
          </Text>
          <Flex>
            <IoEmail height="35" fontSize={"18px"} />
            <NavLink
              href="mailto:jai@sherpafeet.com"
              color="rgba(59,89,152,.6)"
              fontWeight={400}
              mb={10}
              fontSize={"14px"}
              children="jai@sherpafeet.com"
            />
          </Flex>
          <StyledHeading
            color="#757575"
            width={[1, 1 / 3]}
            m={-4}
            p={5}
            mb={[1,2,3]}
            children="Contact Us"
          />
          <Flex flexWrap="wrap" justifyContent="center">
            <Form onSubmit={this.handleSubmit} alignItems="center">
              <FormItem
                {...formItemLayout}
                label={
                  <span>
                    Name&nbsp;
                    <Tooltip title="What is your name?">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                }
              >
                {getFieldDecorator("name", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your name!",
                      whitespace: true
                    }
                  ]
                })(<Input />)}
              </FormItem>
              <FormItem
          {...formItemLayout}
          label="Mobile Number"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your mobile number!' }],
          })(
            <Input addonBefore={prefixSelector}  />
          )}
        </FormItem>
              <FormItem {...formItemLayout} label="E-mail">
                {getFieldDecorator("email", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(<Input />)}
              </FormItem>

              <FormItem {...formItemLayout} label="Message" >
                <TextArea rows={4} style={{width:280}} />
              </FormItem>
              <FormItem {...tailFormItemLayout}>
                {getFieldDecorator("agreement", {
                  valuePropName: "checked"
                })(
                  <Checkbox>
                    I have read the <a href="">agreement</a>
                  </Checkbox>
                )}
              </FormItem>
              <FormItem {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" style={{backgroundColor:'rgba(59,89,152,.6)' }}>
                  Submit
                </Button>
              </FormItem>
            </Form>
          </Flex>
        </Flex>
      </Layout>
    );
  }
}
const WrappedRegistrationForm = Form.create()(RegistrationForm);
export default WrappedRegistrationForm;
