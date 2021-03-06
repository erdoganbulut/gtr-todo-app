import React, { useReducer, useEffect } from 'react';
import { Modal, Input, Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/modules/todo/actions';

type Props = {
  isActive: boolean;
  setIsActive: Function;
};

interface State {
  title: string;
  completed: boolean;
}

type Action =
  | { type: 'changeTitle'; payload: string }
  | { type: 'changeCompleted'; payload: boolean }
  | { type: 'reset' };

const initialState = {
  title: '',
  completed: false,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'changeTitle':
      return { ...state, title: action.payload };
    case 'changeCompleted':
      return { ...state, completed: action.payload };
    case 'reset':
      return { ...initialState };
    default:
      throw new Error();
  }
};

const TodoAdd: React.FC<Props> = ({ isActive, setIsActive }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const reduxDispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'reset' });
  }, [isActive]);

  const handleOk = () => {
    reduxDispatch(
      addTodo({
        completed: state.completed,
        title: state.title,
        order: Math.floor(Math.random() * 1000),
      }),
    );
    setIsActive(false);
  };

  return (
    <Modal
      title="Add To-do Item"
      visible={isActive}
      onOk={() => handleOk()}
      onCancel={() => setIsActive(false)}
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

export default TodoAdd;
