import React from "react";

function Definition({ def, font }) {
  return (
    <li className={`pl-2 text-veryMedGrey font-light ${font} dark:text-white`}>
      {def}
    </li>
  );
}

export default Definition;
