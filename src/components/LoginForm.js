import React from 'react';
import {Button, Checkbox, Form, Image, Input} from "antd";
import google from "../assets/images/google.png";
import {CloseCircleOutlined} from "@ant-design/icons";

const LoginForm = () => {
    const [form] = Form.useForm();
    function handleSubmitForm(values){
        const {email, password} = values
        alert(`Login successfully, hello ${email}`)
        form.resetFields()

    }
    return (
        <div className={'form'}>
            <Form
                form={form}
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: false,
                }}
                onFinish={handleSubmitForm}
                layout={"vertical"}
                style={{
                    width: '100%',
                }}
            >
                <Form.Item
                    name="email"
                    label={<span className={'label'}>Email</span>}
                    style={{marginBottom: 20}}
                    required={false}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input className={'custom-input'} allowClear/>
                </Form.Item>
                <Form.Item
                    name="password"
                    label={<span className={'label'}>Password</span>}
                    style={{marginBottom: 20}}
                    required={false}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input.Password className={'custom-input'}/>
                </Form.Item>
                <Form.Item>
                    <div style={{display: 'flex', justifyContent: 'space-between'}} className="label">
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox >Remember me</Checkbox>
                        </Form.Item>
                        <a  className="login-form-forgot label highlight-text"
                            href="">
                            Forgot password?
                        </a>
                    </div>
                </Form.Item>

                <Form.Item style={{marginBottom: 16}}>
                    <Button className={'custom-button'} style={{background: '#5429FF'}}
                            type="primary" htmlType="submit">
                        Sign in
                    </Button>
                </Form.Item>
                <Button
                    className={'custom-button'}
                    style={{
                        margin: '16px 0 20px 0',
                        background: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Image width={24} height={24} preview={false} src={google}/>
                    <span style={{marginLeft: 8, fontWeight: 500}}> Sign in with Google</span>
                </Button>
                <div style={{textAlign: 'center'}}>
                    Don't have account? <a className={'highlight-text label'} href="">Sign
                    up</a>
                </div>
            </Form>
        </div>
    );
};

export default LoginForm;