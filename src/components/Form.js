import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";

export const Form = (props) => {
  const data = useContext(AppContext);
  const { create } = data;
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.currentId === "") {
      create({
        saludo: value,
      });
    } else {
      props.update(props.currentId, { saludo: value });
      props.setCurrentId("");
    }
    e.target.reset();
  };
  const getItemById = async () => {
    const item = await props.getById(props.currentId);
    // console.log(item.data().saludo);
    setValue(item.data().saludo);
  };
  useEffect(() => {
    if (props.currentId === "") {
      setValue("");
    } else {
      getItemById();
    }
  }, [props.currentId]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button type="submit">
          {props.currentId === "" ? "Save" : "Update"}
        </button>
      </form>
    </div>
  );
};
