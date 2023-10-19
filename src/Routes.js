import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListScreen from './components/ListScreen/ListScreen';
import DetailsScreen from './components/DetailsScreen/DetailsScreen';

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListScreen />} />
        <Route path="/details/:id" element={<DetailsScreen />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;