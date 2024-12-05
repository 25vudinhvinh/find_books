import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { MainLayout } from '~/components/layout';
import { publicRoute } from '~/routes/routes';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoute.map((route, index) => {
            const Element = route.element;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <MainLayout>
                    <Element />
                  </MainLayout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
