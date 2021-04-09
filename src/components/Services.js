import { fb } from "./firebase";
const db = fb.firestore().collection("hooks");

const getAll = () => {
  return db;
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

const Services = {
  getAll,
  create,
  update,
  remove,
};

export default Services;
