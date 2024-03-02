import { useState } from "react";

const Form = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }

  return (
    <div>
      <h1>
        {name.firstName} - {name.lastName}
      </h1>
      <hr />
      <form>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />
        <br />
        <br />
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        />
        <br />
        <br />
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </div>
  );
};

export default Form;
