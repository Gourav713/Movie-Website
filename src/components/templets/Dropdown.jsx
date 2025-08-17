import React from 'react'

function Dropdown({title,options, func}) {
  return (
    <div className="select">
      <select defaultValue="0" name="format" onChange={func} id="format">
        <option value="0" disabled>
          {title}
        </option>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown
