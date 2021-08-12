/*eslint-disable*/

import React from 'react';
import { withRouter } from 'react-router-dom';

//location은 따로 해주세요.

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: {},
      showMenuCate: false,
      showMenuSubCate: false,
    };
  }

  componentDidMount() {
    fetch(`http://10.58.2.67:8000/navigator`)
      // fetch('http://localhost:3000/data/productDetail/navigator.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          nav: res,
        });
      });
  }

  showMenuCate = e => {
    e.preventDefault();
    this.setState({
      showMenuCate: true,
    });
  };

  showMenuCateDel = e => {
    e.preventDefault();
    this.setState({
      showMenuCate: false,
    });
  };

  showMenuSubCate = e => {
    e.preventDefault();
    this.setState({
      showMenuSubCate: true,
    });
  };

  showMenuSubCateDel = e => {
    e.preventDefault();
    this.setState({
      showMenuSubCate: false,
    });
  };

  render() {
    const { nav } = this.state;
    console.log(nav);
    return (
      <div className="location">
        <h6>홈</h6>
        <p>&gt;</p>
        <li>
          <ul className="dropDown">
            <li>
              <ul className="dropDownMenu">
                {nav.navigators && nav.navigators[0].name}
              </ul>
            </li>
          </ul>
        </li>

        {/* <div>
          <button>러쉬</button>
        </div>
        <p>&gt;</p> */}

        {/* <div onMouseOver={this.showMenuCate}>
          <button>Show menu</button>
          {this.state.showMenuCate && (
            <div onMouseOut={this.showMenuCateDel}>
              <button>{nav.navigators && nav.navigators[0].name}</button>
            </div>
          )}
        </div> */}

        <p>&gt;</p>
        {/* 
        {
          <div>
            <button onMouseOver={this.showMenuSubCate}>Show menu</button>
            {this.state.showMenuSubCate && (
              <div>
                {nav.navigators &&
                  nav.navigators[0].subcategories.map((e, i) => {
                    return (
                      <div>
                        <button onMouseOut={this.showMenuSubCateDel}>
                          {e.name}
                        </button>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        } */}
      </div>
    );
  }
}

export default withRouter(Location);