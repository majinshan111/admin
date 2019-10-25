import React,{Component,Fragment} from 'react'
import { Select } from 'antd';
const { Option } = Select;
class CategorySelect extends Component{
  constructor(){
    super()
    this.state={
      value:'冷餐冷冻'
    }
  }
    render(){
        return(
          <Fragment>
            <Select initialValue="冷餐冷冻">
              <Option value="冷餐冷冻">冷餐冷冻</Option>
              <Option value="精品水果">精品水果</Option>
              <Option value="天天鲜食">天天鲜食</Option>
              <Option value="粮油干货">粮油干货</Option>
              <Option value="中外名酒">中外名酒</Option>
              <Option value="休闲零食">休闲零食</Option>
            </Select>
          </Fragment>
        )
    }
}
export default CategorySelect