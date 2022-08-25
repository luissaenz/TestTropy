import './App.css';
import User from './components/User';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import RepositorieDetail from './components/RepositorieDetail';
import FileContent from './components/FileContent';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="users/:userName" element={<User />} />
          <Route
            path="users/:userName/:repoName"
            element={<RepositorieDetail />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
