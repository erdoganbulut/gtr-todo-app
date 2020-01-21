import React from 'react';

const Documentation: React.FC = () => (
  <section className="component is-documentation">
    <p>
      <a href="https://www.todobackend.com/" target="_blank" rel="noopener noreferrer">
        TodoBackend
      </a>{' '}
      was used for Todo service.
    </p>
    <p>
      Service Details: C# - ASP.NET Core 2.0 (
      <a
        href="https://www.todobackend.com/specs/index.html?https://dotnetcore-todo-webapi.herokuapp.com/v1/todos"
        target="_blank"
        rel="noopener noreferrer"
      >
        Specs
      </a>{' '}
      -{' '}
      <a
        href="https://github.com/ChristianAlexander/dotnetcore-todo-webapi"
        target="_blank"
        rel="noopener noreferrer"
      >
        Code
      </a>{' '}
      -{' '}
      <a
        href="https://www.todobackend.com/client/index.html?https://dotnetcore-todo-webapi.herokuapp.com/v1/todos"
        target="_blank"
        rel="noopener noreferrer"
      >
        Implementation
      </a>
      )
    </p>
  </section>
);

export default Documentation;
