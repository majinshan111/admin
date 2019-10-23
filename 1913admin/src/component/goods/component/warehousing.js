import React,{Component} from 'react'
import { Button } from 'antd'
import './warehousing.less'
class wareHousing extends Component{
    constructor(){
        super()
        this.state={
            ruku:""
        }
    }
    render(){
        return(
            <div className="house-box">
                <ul>
                    <li>
                        <h3>入库</h3>
                        <hr/>
                    </li>
                    <li>
                        <label>库存数量：</label>
                        <input type="text" value="555" disabled/>
                    </li>
                    <li>
                        <label>入库数量：</label>
                        <input type="text" value={this.state.ruku} onChange={(e)=>{
                            this.setState({ruku:e.target.value})
                        }}/>
                    </li>
                    <li className="edit-button">
                        <Button onClick={()=>{
                            console.log(this.props)
                            this.props.changeComState(false)
                        }}>取消</Button>
                        <Button type="primary">保存</Button>
                    </li>
                </ul>
            </div>
        )
    }
}
export default wareHousing