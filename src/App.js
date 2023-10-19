import { Header } from "./components";
import ProductPage from "./pages/ProductPage";
import { Provider } from 'react-redux';
import index from "./store";

function App() {
  return (
      <Provider store={index}>
          <Header></Header>
          <ProductPage></ProductPage>
      </Provider>
  );
}

export default App;
