import { RouterProvider } from "react-router-dom"
import { mainRouter } from "./router/mainRouter"
import { store } from "./global/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={mainRouter} />
      </Provider>
    </div>
  );
}

export default App
