import React, {useEffect, useState} from 'react';

function App() {

  const [links, setLinks] = useState([]);

  const loadLinks = async () => {
    try {
      const res = await fetch('/api/getLinks');
      const links = await res.json();
      setLinks(links);
    } catch (err) {
      console.log(err);
    };
  };

  useEffect(() => {
    loadLinks();
  }, []);

  return <div className="container py-5">
    <h1 className="text-center mb-5">List of Links</h1>
  </div>;
}

export default App;
