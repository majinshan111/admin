import React,{Component}from 'react';
import './goodshouse.less'
import { DatePicker,Input,InputNumber,Button,Pagination } from 'antd';
import moment from 'moment';
const dateFormat = 'YYYY/MM/DD';

class Goodshouse extends Component {

  render() { 
    
    return (
      <div className='goodhouse'>
        <div className="goodhouse-top">
            <h4>商品出入库</h4>
            <p>商品出入库信息统计，可以进行查询操作</p>
            <hr/>
            <div className="goodhouse-find">
              <ul>
                <li>
                  <span>商品id: </span>
                  <InputNumber min={1} max={10} defaultValue={1} />
                </li>
                <li>
                  <span className="goodsname">商品名称：</span>
                  <Input placeholder="虾" />
                </li>
                <li>
                  <span>时间：</span>
                  <DatePicker defaultValue={moment('2019/10/22', dateFormat)} format={dateFormat} />
                </li>
                <li>
                  <Button type="primary">搜索</Button>
                  <Button>重置</Button>
                </li>
              </ul>
            </div>
          </div>
      </div>
    );
  }
}


export default Goodshouse