import { Header, NotificationsBar } from "./components";
import ProductPage from "./pages/ProductPage";
import { Provider } from 'react-redux';
import index from "./store";

function App() {
  return (
      <Provider store={index}>
          <NotificationsBar></NotificationsBar>
          <Header></Header>
          <ProductPage></ProductPage>
      </Provider>
  );
}

export default App;
