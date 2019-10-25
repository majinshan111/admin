import React,{Component,Fragment}from 'react';
import { Card } from 'antd';
import {connect} from 'react-redux'
import './index.less'
import {withRouter}from 'react-router-dom'
// import state from '../../store/state';

class TokenModel extends Component{
   
    render(){
        console.log('model')
        console.log(this,'model')
        let {TokenModel}=this.props
        return(
            <Fragment>
                {!TokenModel ||
                    <div className='token-model'>
                    <Card title='token失效'>
                        token缺失或者失效，请重新登录
                        <button onClick={()=>{
                            this.props.history.push('/login')
                        }}>去登录</button>
                    </Card>
                </div>
            }
            </Fragment>
           
        )
    }
}
export default connect(state=>state)(withRouter(TokenModel))
