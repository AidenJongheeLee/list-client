import React, { Component } from 'react';

const NewListForm = ({ onNewList = f => f }) => {
  let title, excerpt;
  const submit = e => {
    e.preventDefault();
    onNewList(title.value, excerpt.value);
    title.value = '';
    excerpt.value = '';
    title.focus();
  };

  return (
    <form onSubmit={submit}>
      <input ref={input => (title = input)} type="text" placeholder="Title..." required />
      <input ref={input => (excerpt = input)} type="text" placeholder="Excerpt..." required />
      <button onClick={submit}>Submit</button>
    </form>
  );
};

export default NewListForm;
