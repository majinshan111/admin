import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import { List, Card } from 'antd';
class CategorySecond extends Component {

  render() { 
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
        <List
    grid={{ gutter: 16, column: 4 }}
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
      </List.Item>
    )}
  />,
      </div>
    );
  }
}


export default CategorySecond
// const EditableFormTable = Form.create()(EditableTable);

// ReactDOM.render(<EditableFormTable />, mountNode);
// export default EditableFormTable;