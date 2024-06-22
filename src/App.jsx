import LaunchRecordsTable from "./components/table/LaunchRecordsTable";
import LaunchRecordCardGallery from "./components/card/LaunchRecordsCardGallery";

import "./App.css";

const App = () => {
  return (
    <>
      <h1>SpaceX Launches</h1>
      {<LaunchRecordCardGallery />}
      {/* <LaunchRecordsTable /> */}
    </>
  ); //add error boundary to debug better
};

export default App;
