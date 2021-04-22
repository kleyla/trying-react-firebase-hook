import React, { useContext, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { AppContext } from "../contexts/AppContext";
import { Form } from "./Form";

export const Ejemplo = () => {
  const data = useContext(AppContext);
  const { getAll, getById, create, update, remove } = data;
  const [currentId, setCurrentId] = useState("");
  const [value, loading, error] = useCollection(getAll());

  console.log(value);

  if (value) {
    const values = value.docs.filter((val) => val.data().saludo == "chau");
    console.log(values);
  }

  return (
    <div>
      <h1>Ejemplo</h1>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <p>Loading...</p>}
      {value && (
        <div>
          {value.docs.map((doc) => (
            <div key={doc.id}>
              <label>{doc.data().saludo}</label>
              <button
                onClick={() => {
                  setCurrentId(doc.id);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  remove(doc.id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
      <h2>Formulario</h2>
      <Form {...{ create, update, getById, currentId, setCurrentId }} />
    </div>
  );
};
