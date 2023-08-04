import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      {/* <App /> */}
      <ReactQueryDevtools initialIsOpen={false}/>

  </QueryClientProvider>
);
