import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { ErrorsType } from '../types/Error';

interface Props {
  onError: (error: ErrorsType | null) => void;
}

export const TodoHeader: React.FC<Props> = ({ onError }) => {
  const todoFieldRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (todoFieldRef.current) {
      todoFieldRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!query) {
      onError(ErrorsType.EmptyTitle);
    }
  };

  return (
    <header className="todoapp__header">
      <button
        type="button"
        className="todoapp__toggle-all active"
        data-cy="ToggleAllButton"
      />

      <form onSubmit={handleSubmit}>
        <input
          ref={todoFieldRef}
          value={query}
          data-cy="NewTodoField"
          type="text"
          className="todoapp__new-todo"
          placeholder="What needs to be done?"
          onChange={e => setQuery(e.target.value)}
        />
      </form>
    </header>
  );
};
