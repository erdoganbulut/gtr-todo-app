import React, { useReducer, useEffect } from 'react';
import { Modal, Input, Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../../store/modules/todo/actions';
import { TodoRawI, TodoItemI } from '../../store/modules/todo/types';

type Props = {
  updateModal: {
    isActive: boolean;
    data: TodoRawI;
  };
  setUpdateModal: Function;
};

type Action =
  | { type: 'changeTitle'; payload: string }
  | { type: 'changeCompleted'; payload: boolean }
  | { type: 'reset'; payload: TodoItemI };

const initialState = {
  title: '',
  completed: false,
  order: 0,
};

const reducer = (state: TodoItemI, action: Action) => {
  switch (action.type) {
    case 'changeTitle':
      return { ...state, title: action.payload };
    case 'changeCompleted':
      return { ...state, completed: action.payload };
    case 'reset':
      return { ...action.payload };
    default:
      throw new Error();
  }
};

const TodoUpdate: React.FC<Props> = ({ updateModal, setUpdateModal }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const reduxDispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'reset', payload: updateModal.data });
  }, [updateModal.isActive]);

  const handleOk = () => {
    reduxDispatch(
      updateTodo(updateModal.data.id, {
        completed: state.completed,
        title: state.title,
        order: state.order,
      }),
    );
    setUpdateModal({ ...updateModal, isActive: false });
  };

  return (
    <Modal
      title="Add To-do Item"
      visible={updateModal.isActive}
      onOk={() => handleOk()}
      onCancel={() => setUpdateModal({ ...updateModal, isActive: false })}
    >
      <div>
        <Input
          placeholder="Title"
          value={state.title}
          onChange={e => dispatch({ type: 'changeTitle', payload: e.target.value })}
        />
      </div>
      <div>
        <br />
        <Checkbox
          checked={state.completed}
          onChange={e => dispatch({ type: 'changeCompleted', payload: e.target.checked })}
        >
          Completed
        </Checkbox>
      </div>
    </Modal>
  );
};

export default TodoUpdate;
