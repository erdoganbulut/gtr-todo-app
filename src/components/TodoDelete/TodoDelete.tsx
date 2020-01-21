import { Modal } from 'antd';
import { TodoRawI } from '../../store/modules/todo/types';

const { confirm } = Modal;

const TodoDelete = (record: TodoRawI, dispatchRemove: Function) => {
  confirm({
    title: 'Are you sure delete this task?',
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      dispatchRemove(record.id);
    },
  });
};

export default TodoDelete;
