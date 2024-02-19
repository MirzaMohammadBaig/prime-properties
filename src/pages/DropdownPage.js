import Dropdown from "../components/Dropdown";
import { useState } from "react";

function DropdownPage() {
  const [selection, setSelection] = useState(null|{});
  
  const handleSelect = (option) =>{
    setSelection(option);
  }

  const options = [
    {label: 'Red color box', value: 'red'},
    {label: 'Blue color box', value: 'blue'},
    {label: 'Black color box', value: 'black'},
    {label: 'Yellow color box', value: 'yellow'},
  ];
  return (
    <div className="App">
        <Dropdown options={options} value={selection} onChange={handleSelect}/>
    </div>
  );
}

export default DropdownPage;
