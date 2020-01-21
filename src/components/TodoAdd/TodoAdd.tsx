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
  complated: boolean;
}

type Action =
  | { type: 'changeTitle'; payload: string }
  | { type: 'changeComplated'; payload: boolean }
  | { type: 'reset' };

const initialState = {
  title: '',
  complated: false,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'changeTitle':
      return { ...state, title: action.payload };
    case 'changeComplated':
      return { ...state, complated: action.payload };
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
        complated: state.complated,
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
          checked={state.complated}
          onChange={e => dispatch({ type: 'changeComplated', payload: e.target.checked })}
        >
          Complated
        </Checkbox>
      </div>
    </Modal>
  );
};

export default TodoAdd;
