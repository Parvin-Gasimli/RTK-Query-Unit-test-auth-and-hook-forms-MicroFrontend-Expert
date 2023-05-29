import React, { useState } from "react";

const TodoForm = () => {
  const [fields, setFields] = useState([
    { name: "", surname: "", age: "", selection: "" },
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newFields = [...fields];
    newFields[index] = {
      ...newFields[index],
      [name]: value,
    };
    setFields(newFields);
  };

  const addField = () => {
    setFields([...fields, { name: "", surname: "", age: "", selection: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form values
    console.log(fields);
  };

  return (
    <>
      <h1>todo</h1>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={field.name}
                onChange={(e) => handleChange(index, e)}
              />
            </label>
            <br />

            <label>
              Surname:
              <input
                type="text"
                name="surname"
                value={field.surname}
                onChange={(e) => handleChange(index, e)}
              />
            </label>
            <br />

            <label>
              Age:
              <input
                type="number"
                name="age"
                value={field.age}
                onChange={(e) => handleChange(index, e)}
              />
            </label>
            <br />

            <label>
              Selection:
              <select
                name="selection"
                value={field.selection}
                onChange={(e) => handleChange(index, e)}
              >
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </label>
            <br />
          </div>
        ))}

        <button type="button" onClick={addField}>
          Add Field
        </button>
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default TodoForm;
