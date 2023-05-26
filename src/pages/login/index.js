import logo from '../../assets/images/logo.png'
import thumbnail from '../../assets/images/image.png'
import {Col, Image, Row} from "antd";
import LoginForm from "../../components/LoginForm";

export default () => {
    return <div className={'main-container'}>
        <Row className={'container'} gutter={[1, 1]}>
            <Col xl={11} lg={11} md={24} sm={24} xs={24} className={'login-side'}>
                <div className={'logo'}>
                    <Image preview={false} className={'image'} src={logo}/>
                    <span className={'text'}>FNFT Market</span>
                </div>
                <div className={'login'}>
                    <div className={'headline'} >
                        <span className={'name'}>NFT Access</span>
                        <span className={'note'}>Please fill your detail to access your account.</span>
                    </div>
                    <LoginForm/>
                </div>
            </Col>
            <Col xl={13} lg={13} md={0} sm={0} xs={0} className={'thumbnail-side'}>
                <div style={{borderRadius: 40}}>
                    <Image preview={false} src={thumbnail}/>
                </div>
            </Col>
        </Row>
    </div>
}