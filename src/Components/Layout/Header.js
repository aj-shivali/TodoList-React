import React from "react";

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
    </header>
  );
}

const headerStyle = {
  background: "transparent",
  color: "#3A0D3D",
  textAlign: "center",
  padding: "10px",
};
// export default Header;
