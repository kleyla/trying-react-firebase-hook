import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { fb } from "./components/firebase";
import Services from "./components/Services";

function App() {
  const [datos, setDatos] = useState([]);

  const [value, loading, error] = useCollection(
    fb.firestore().collection("hooks")
  );

  useEffect(() => {
    // setDatos([])
    Services.create({
      saludo: "hi",
    });
  }, []);

  return (
    <div>
      <h1>HI!</h1>
      <div>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {value && (
          <span>
            Collection:{" "}
            {value.docs.map((doc) => (
              <div key={doc.id}>{doc.data().saludo}, </div>
            ))}
          </span>
        )}
      </div>
    </div>
  );
}

export default App;
