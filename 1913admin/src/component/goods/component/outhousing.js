import React,{Component} from 'react'
import { Button } from 'antd'
import './warehousing.less'
class wareHousing extends Component{
    constructor(props){
        super(props)
        this.state={
            chuku:""
        }
    }
    saveData=(page)=>{
        let num
        let {id,name,goodsType,oldPrice,nowPrice,counts,guige,addRess,state,imgPath,second} = this.props.data
        if(Number(this.state.chuku)>counts){
            this.setState({chuku:counts})
            num = 0
        }else{
            num = counts - Number(this.state.chuku)
        }
        this.$axios.get(`/fm/admin/house/addHouse?id=${id}&name=${name}&counts=${num}&goodout=${this.state.chuku}`)
        .then((data)=>{
            console.log(data)
        })
        this.$axios.get(`/fm/admin/goods/updateGoods?id=${id}&name=${name}&goodsType=${goodsType}&oldPrice=${oldPrice}&nowPrice=${nowPrice}&counts=${num}&sale=${this.state.chuku}&guige=${guige}&addRess=${addRess}&state=${state}&imgPath=${imgPath}&second=${second}`)
        .then((data)=>{
            console.log(data,'保存')
            alert('出库成功')
            this.props.changeOutState(false)
            this.props.refreshData(page)
        })
    }
    render(){
        console.log(this,'出库')
        return(
            <div className="house-box">
                <ul>
                    <li>
                        <h3>出库</h3>
                        <hr/>
                    </li>
                    <li>
                        <label>库存数量：</label>
                        <input type="text" value={this.props.data.counts} disabled/>
                    </li>
                    <li>
                        <label>出库数量：</label>
                        <input type="text" value={this.state.chuku} onChange={(e)=>{
                            this.setState({chuku:e.target.value})
                        }}/>
                    </li>
                    <li className="edit-button">
                        <Button onClick={()=>{
                            console.log(this.props)
                            this.props.changeOutState(false)
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