import "./App.css";
import Tabs from "./Components/tabs";

export default function App() {
  return (
    <div className="App">
      <Tabs tabsConfig={tabsConfig} />
    </div>
  );
}
const tabsConfig = [
  {
    label: "Tab1",
    content: "Tab 1 content is showing here", 
    
  },
  {
    label: "Tab2",
    content: "Tab 2 content is showing here",
  },
  {
    label : "Tab3",
    content : "Tab 3 content is showing here",
  }
];