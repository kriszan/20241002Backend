import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('  http://localhost:3000/')
      .then(response => response.text())
      .then(data => setData(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <div>
      <p>{data}</p>
    </div>
  );
}

export default App;
