import React,{Component,Fragment}from 'react';
import { List, Card } from 'antd';
import ReactEcharts from 'echarts-for-react'
import './index.less'

const data = [
  {
    title: [['总销售额 : ',' ￥67834'],['今日销售额 : ','￥1068']]
  },
  {
    title: [['待发货 : ',375],['今日新增 : ',24]],
  }, 
  {
    title: [['购物车收藏数:',342],['用户数量 : ',56]],
  },
  {
    title: [['成交笔数 : ',7256],['今日新增 : ',9]],
  },
];
 class Login extends Component {
  constructor(){
    super()
        this.state={
          option1:{
            title : {
              text: '订单情况概要',
              x:'center'
          },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['待发货','交易成功','退款中','配送中']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:250, name:'待发货'},
                        {value:250, name:'交易成功'},
                        {value:250, name:'退款中'},
                        {value:250, name:'配送中'},
                    ],
                   
                }
            ]
        },
        option2:{
          title : {
            text: '客户收藏转化率',   
            x:'center'
        },
          legend: {
              orient: 'vertical',
              left: 'left',
              data: ['收藏购物车','已完成订单']
          },
          series : [
              {
                  name: '访问来源',
                  type: 'pie',
                  radius : '55%',
                  center: ['50%', '60%'],
                  data:[
                      {value:50, name:'收藏购物车'},
                      {value:50, name:'已完成订单'},
                  ],
                 
              }
          ]
      }
        }
  }
  render() { 
    
    return (
      <Fragment>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card title={item.title[0]}>{item.title[1]}</Card>
            </List.Item>
          )}
        />
        {/* <div className='tubiao'> */}
         
            {/* <ReactEcharts option={this.state.option1}></ReactEcharts> */}
         
          <div className='pie-box'>
            <Card className='tubiao'>
            <ReactEcharts option={this.state.option1}></ReactEcharts>
          </Card>
          <Card className='tubiao'>
            <ReactEcharts option={this.state.option2}></ReactEcharts>
          </Card>
          </div>
          
        {/* </div> */}
     
     
      </Fragment>
      
    );
  }
} 



// ReactDOM.render(
//   <List
//     grid={{ gutter: 16, column: 4 }}
//     dataSource={data}
//     renderItem={item => (
//       <List.Item>
//         <Card title={item.title}>Card content</Card>
//       </List.Item>
//     )}
//   />,
//   mountNode,
// );

export default Login