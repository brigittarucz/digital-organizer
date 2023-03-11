import "assets/stylesheets/main.css";
import { RenderedRouterOutput, Router } from "router/router";

function App() {
  // postList({
  //   points: [
  //     {
  //       additionalInformation: "hello",
  //       checked: true,
  //       description: "hello",
  //       images: [],
  //     },
  //   ],
  //   title: "hello",
  // });

  // const handleDelete = async (filename: string) => {
  //   await deleteFromStorage(filename);
  // };

  // const handleDownload = async (filename: string) => {
  //   await downloadFromStorage(filename);
  // };

  return (
    <div className="App">
      <Router />
      <RenderedRouterOutput />

      {/*
        <MainView /> */}
    </div>
  );
}

export default App;
