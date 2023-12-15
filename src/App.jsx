/* import { AppWrapper } from "./AppStyle"; */
import { Provider } from "react-redux";
import { MenuContextProvider } from "./context/MenuHmb";
import MyRoutes from "./routes/MyRoutes";
import store from "./redux/store/store"
/* import api from "./utils/api.js";

async function fetchData() {
  try{
    const response = await api.get("/test");
    console.log(response.data)
  }catch(err){
    console.log(err)
  }
}

fetchData() */

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

{
  /* <nav>
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/Dummy">Dummy</a>
    </li>
  </ul>
</nav>;
 */
}
