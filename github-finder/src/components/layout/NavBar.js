import React, { Component } from "react";
import PropTypes from 'prop-types'


export class NavBar extends Component {
	static defaultProps = {
		title: 'Github Finder',
		icon: 'fab fa-github'
	};
	// You can set static default props if there arent any special classNames being passed down from App.js.
	// If someone passes props down through <Navbar /> in App.js, the default props will get overwritten.

	static propTypes = {
		title: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired
	}
  render() {
    return (
        <nav className="navbar bg-primary">
            <h1>
							<i className={ this.props.icon } /> { this.props.title }
            </h1>
        </nav>
    );
  }
}

export default NavBar;
