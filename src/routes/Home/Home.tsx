import React from 'react';

import { Table, Button, Modal, Icon } from 'antd';

const { confirm } = Modal;

interface DataItemI {
  key: string;
  name: string;
  age: number;
  address: string;
}

const handleDelete = () => {
  confirm({
    title: 'Do you want to delete these items?',
    content: 'When clicked the OK button, this dialog will be closed after delete',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {
      return false;
    },
  });
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: string, record: DataItemI) => {
      return (
        <span>
          <Button.Group size="small">
            <Button type="primary">
              <Icon type="edit" />
            </Button>
            <Button type="danger" onClick={handleDelete}>
              <Icon type="delete" />
            </Button>
          </Button.Group>
        </span>
      );
    },
  },
];

const data: DataItemI[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: any, selectedRows: any) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataItemI) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

const Home: React.FC = () => (
  <Table
    bordered
    pagination={false}
    rowSelection={rowSelection}
    columns={columns}
    dataSource={data}
  />
);

export default Home;
