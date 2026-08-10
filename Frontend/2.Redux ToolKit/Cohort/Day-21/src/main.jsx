import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.jsx";
import AppRoutes from "./Routes/AppRoutes";
import { ToastContainer } from "react-toastify";

// Access the client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <AppRoutes />
      <ToastContainer />
    </Provider>
  </QueryClientProvider>,
);
