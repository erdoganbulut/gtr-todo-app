import React, { useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Table, Button, Icon, Spin } from 'antd';

import { ApplicationStateI } from '../../store/modules/index';
import { fetchTodos, removeTodo, updateTodo } from '../../store/modules/todo/actions';
import { setBreadcrumb } from '../../store/modules/breadcrumb/actions';
import { TodoStateI, TodoRawI } from '../../store/modules/todo/types';

import TodoDelete from '../../components/TodoDelete';
import TodoAdd from '../../components/TodoAdd';
import TodoUpdate from '../../components/TodoUpdate';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const state: TodoStateI = useSelector(({ todo }: ApplicationStateI) => ({
    loading: todo.loading,
    errors: todo.errors,
    data: todo.data,
  }));

  const dispatchPosts = useCallback(() => dispatch(fetchTodos()), [dispatch]);

  const dispatchRemove = (id: number) => dispatch(removeTodo(id));

  const dispatchBreadcrumb = useCallback(() => dispatch(setBreadcrumb([{ title: 'Home' }])), [
    dispatch,
  ]);

  const dispatchUpdate = (item: TodoRawI, selected: boolean) => {
    const updateData = {
      title: item.title,
      order: item.order,
      completed: selected,
    };
    dispatch(updateTodo(item.id, updateData));
  };

  useEffect(() => {
    dispatchPosts();
  }, [dispatchPosts]);

  useEffect(() => {
    dispatchBreadcrumb();
  }, [dispatchBreadcrumb]);

  const [todoAddModal, setTodoAddModal] = useState(false);

  const [todoUpdateModal, setTodoUpdateModal] = useState({
    isActive: false,
    data: {
      id: 0,
      url: '',
      order: 0,
      title: '',
      completed: false,
    },
  });

  const [selectedRows, setSelectedRows] = useState<number[] | string[]>([]);
  // rowSelection object indicates the need for row selection
  const rowSelection = {
    selectedRowKeys: selectedRows,
    onSelect: (record: TodoRawI, selected: boolean) => {
      dispatchUpdate(record, selected);
    },
    onSelectAll: (selected: boolean) => {
      state.data.forEach((item: TodoRawI) => {
        dispatchUpdate(item, selected);
      });
    },
    onChange: (selectedRowKeys: number[] | string[]) => setSelectedRows(selectedRowKeys),
  };

  useEffect(() => {
    const rows: number[] = [];
    state.data.forEach((item: TodoRawI, index: number) => {
      if (item.completed) rows.push(index);
    });
    setSelectedRows(rows);
  }, [state.data]);

  return (
    <>
      <TodoAdd isActive={todoAddModal} setIsActive={setTodoAddModal} />
      <TodoUpdate updateModal={todoUpdateModal} setUpdateModal={setTodoUpdateModal} />
      <p className="tar">
        <Button type="primary" onClick={() => setTodoAddModal(true)}>
          Add Item
          <Icon type="plus" />
        </Button>
      </p>
      <Spin spinning={state.loading}>
        <Table bordered pagination={false} rowSelection={rowSelection} dataSource={state.data}>
          <Table.Column title="ID" dataIndex="id" key="id" />
          <Table.Column title="Title" dataIndex="title" key="title" />
          <Table.Column
            title="Action"
            key="action"
            render={(text, record: TodoRawI) => (
              <>
                <Button.Group size="small">
                  <Button
                    type="primary"
                    onClick={() => setTodoUpdateModal({ isActive: true, data: record })}
                  >
                    <Icon type="edit" />
                  </Button>
                  <Button type="danger" onClick={() => TodoDelete(record, dispatchRemove)}>
                    <Icon type="delete" />
                  </Button>
                </Button.Group>
              </>
            )}
          />
        </Table>
      </Spin>
    </>
  );
};

export default Home;
