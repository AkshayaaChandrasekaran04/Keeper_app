import React from "react";

var curryear = new Date().getFullYear();

function Foo() {
  return (
    <footer>
      <p>copyrightÂ©{curryear}</p>
    </footer>
  );
}

export default Foo;
