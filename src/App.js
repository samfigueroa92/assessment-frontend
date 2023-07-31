import { useState, useEffect } from 'react';

import './App.css';
import ItemsList from './ItemsList/ItemsList';
import Error from './Error/Error';
import Loading from './Loading/Loading';
import Container from './Container/Container';

const API_URL = process.env.REACT_APP_API_URL;

const App = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData(){
      try{
        setError('');
        setLoading(true);
        const res = await fetch(`${API_URL}/items`);
        const json = await res.json();
        const { data, error } = json;
        if (res.ok) {
          setItems(data);
          setLoading(false);
        } else {
          setError(error);
          setLoading(false);
        }

      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error error={error} />;
    } else {
      return <ItemsList items={items} />;
    }
  };

  return (
    <div className="App">
      <div className="App__header">
      Our menu
      </div>
      <Container center={Boolean(error || loading)} scroll={false}>
      {renderContent()}
      </Container>
    </div>
  );
}

export default App;
