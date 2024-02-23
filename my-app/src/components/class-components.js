import React from 'react';

export class Menu extends React.Component {
  render() {
    let menus = ["home", "About Us", "Contact US"];
    console.log(this.props);
    return (
      <header>
        <ul>
          <li>{menus[0]}</li>
          <li>{menus[1]}</li>
          <li>{menus[2]}</li>
        </ul>
        <p>This is paragraph {this.props.name}</p>
      </header>
    );
  }
}
export default Menu