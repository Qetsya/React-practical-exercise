import './App.css';
import Layout from './pages/Layout';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {

  return (
    <div>
      <Navbar />
      <Layout>
        <HomePage />
      </Layout>

    </div>
  );
}

export default App;
