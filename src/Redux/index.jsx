import Counter from "./materi/Counter";
import { Provider } from "react-redux";
import store from "../app/store";

const Redux = () => {
  return (
    <>
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </>
  );
};

export default Redux;
