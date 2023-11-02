import { AppWrapper } from "./AppStyle";
import MyRoutes from "./routes/MyRoutes";

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
    <AppWrapper>
      <MyRoutes />
    </AppWrapper>
  );
}

export default App;

{/* <nav>
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/Dummy">Dummy</a>
    </li>
  </ul>
</nav>;
 */}