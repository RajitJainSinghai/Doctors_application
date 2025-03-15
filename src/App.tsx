import { HashRouter, Route, Routes } from 'react-router-dom';
import FormPage from './components/FormPage';
import PreviewPage from './components/PreviewPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
