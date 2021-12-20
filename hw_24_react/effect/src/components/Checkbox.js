import React, { useState, useEffect } from "react"; 
function Checkbox() {
  const [checked, setChecked] = useState(false); 
  useEffect(() => {
    alert(`checked: ${checked.toString()}`);

  }, [checked])
  return (
    <>
      <input
        type="checkbox" 
        value={checked}
        onChange={() => setChecked(checked => !checked)} 
      />
      {checked ? "checked" : "not checked"} 
    </>
  ); 
};

export default Checkbox;