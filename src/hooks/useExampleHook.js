import { useState } from "react";
import { fb } from "./../components/firebase";

export const useExampleHook = (collection = "example") => {
  const db = fb.firestore().collection(collection);
  //   const [state, setstate] = useState();

  const getAll = () => {
    return db;
  };

  const getById =  (id) => {
    return  db.doc(id).get();
  };

  const create = (data) => {
    return db.add(data);
  };

  const update = (id, value) => {
    return db.doc(id).update(value);
  };

  const remove = (id) => {
    return db.doc(id).delete();
  };

  return {
    getAll,
    getById,
    create,
    update,
    remove,
  };
};
