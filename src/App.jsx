import { Provider } from "react-redux";
import { MenuContextProvider } from "./context/MenuHmb";
import MyRoutes from "./routes/MyRoutes";
import store from "./redux/store/store"
function App() {
  return (
    <div>
      <Provider store={store}>
        <MenuContextProvider>
          <MyRoutes />
        </MenuContextProvider>
      </Provider>
    </div>
  );
}

export default App;

