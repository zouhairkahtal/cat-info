
import { useEffect, useState } from "react";
function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=100", {
      headers: {
        "x-api-key":'live_hRhVM86AOKKY00E8M9ATJsed7nfnKLP0deR8JlQC4drZ0FAJvg0AaBtFEEAVH6Sg',
      },
    })
      .then((res) => res.json())
      .then((data) => setCats(data));
  }, []);

  return (
    <div className="  columns-5  gap-5 p-10">
      {cats.map((cat) => (
        <img
          key={cat.id}
          src={cat.url}
          alt="cat"
          className="rounded-lg shadow-lg w-full  aspect-auto  my-5 "
        />
      ))}
    
    </div>
  );

}

export default App
