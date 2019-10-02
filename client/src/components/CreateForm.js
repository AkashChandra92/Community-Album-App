import React from "react";

function CreateForm(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <label>
          Title :
          <input
            type="text"
            name="title"
            value={props.values.title}
            onChange={props.onChange}
          />
        </label>
        <label>
          URL:
          <input
           type="text"
           name="url"
           value={props.values.url}
           onChange={props.onChange}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default CreateForm

