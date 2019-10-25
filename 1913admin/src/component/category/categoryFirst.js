import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import Housing from './white';
import { List, Card,Icon,Input,InputNumber,Button,Pagination,Select} from 'antd';
class CategoryFirst extends Component {
  constructor(){
    super()
    this.state={
      comeState:false,
      editData:null,
      list:[]
    }
  }
  componentDidMount(){
    this.refreshData()
  }
  changeState=(state)=>{
    this.setState({comeState:state})
  }
  refreshData(){
   this.$axios.get('/fm/admin/firstType/getFirstType')//http://10.60.14.254:3000/admin/firstType/getFirstType
    .then((data)=>{
      // console.log(data)
      // console.log(data.data.list) 
      this.state.list=data
      this.setState({spinning:false,list:data.data.list})
    })
    .catch(()=>{
      this.setState({spinning:false})
    })


  }
  render() { 
    let {comeState} = this.state
    const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];
    return (
      
      <div className='login-box'>
        {!comeState || <Housing id="creat"　changeState={this.changeState}></Housing>}
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item>
              <Card title={item.title}>{item.name}</Card>
            </List.Item>
          )}
        />
        <button onClick={this.changeState.bind(this,true)}>添加</button>
      </div>
      
    );
  }
}


export default CategoryFirst
// const EditableFormTable = Form.create()(EditableTable);

// ReactDOM.render(<EditableFormTable />, mountNode);
// export default EditableFormTable;