import { Modal } from 'antd';
import { TodoRawI } from '../../store/modules/todo/types';

const { confirm } = Modal;

const TodoDelete = (record: TodoRawI) => {
  confirm({
    title: 'Are you sure delete this task?',
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK', record);
    },
    onCancel() {
      console.log('Cancel', record);
    },
  });
};

export default TodoDelete;
