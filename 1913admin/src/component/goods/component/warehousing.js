import React,{Component} from 'react'
import { Button } from 'antd'
import './warehousing.less'
class wareHousing extends Component{
    constructor(props){
        super(props)
        this.state={
            ruku:"",
            count:''
        }
    }
    saveData=(page)=>{
        let {id,name,goodsType,oldPrice,nowPrice,counts,sale,guige,addRess,state,imgPath,second} = this.props.data
        let num = counts + Number(this.state.ruku)
        this.$axios.get(`/fm/admin/house/addHouse?id=${id}&name=${name}&counts=${num}&goodin=${this.state.ruku}`)
        .then((data)=>{
            console.log(data)
        })
        this.$axios.get(`/fm/admin/goods/updateGoods?id=${id}&name=${name}&goodsType=${goodsType}&oldPrice=${oldPrice}&nowPrice=${nowPrice}&counts=${num}&sale=${sale}&guige=${guige}&addRess=${addRess}&state=${state}&imgPath=${imgPath}&second=${second}`)
        .then((data)=>{
            console.log(data,'保存')
            alert('入库成功')
            this.props.changeComState(false)
            this.props.refreshData(page)
        })
    }
    render(){
        console.log(this.props,'入库')
        return(
            <div className="house-box">
                <ul>
                    <li>
                        <h3>入库</h3>
                        <hr/>
                    </li>
                    <li>
                        <label>库存数量：</label>
                        <input type="text" value={this.props.data.counts} disabled/>
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
                        <Button type="primary" onClick={()=>{
                            this.saveData(this.props.nowPage)
                        }}>保存</Button>
                    </li>
                </ul>
            </div>
        )
    }
}
export default wareHousing