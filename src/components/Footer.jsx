import React from "react";

var curryear = new Date().getFullYear();

function Foo() {
  return (
    <footer>
      <p>copyright©{curryear}</p>
    </footer>
  );
}

export default Foo;
