import React from 'react';

export class Menu extends React.Component {
  render() {
    let menus = ["home", "About Us", "Contact US"];
    return (
      <header>
        <ul>
          <li>{menus[0]}</li>
          <li>{menus[1]}</li>
          <li>{menus[2]}</li>
        </ul>
      </header>
    );
  }
}
export default Menu