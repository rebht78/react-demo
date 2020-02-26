import React from "react";
import { Menu, Icon, Button } from "antd";
import { Card, Col, Row } from "antd";

import "antd/dist/antd.css";

const { SubMenu } = Menu;

class Home extends React.Component {
  state = {
    collapsed: false
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <div>
        <div style={{ width: 256, height: 300 }}>
          <Button
            type="primary"
            onClick={this.toggleCollapsed}
            style={{ marginBottom: 16 }}
          >
            <Icon type={this.state.collapsed ? "menu-unfold" : "menu-fold"} />
          </Button>
          <Menu
            defaultSelectedKeys={["1", "2"]}
            defaultOpenKeys={["sub1", "sub2"]}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="mail" />
                  <span>Main Menu</span>
                </span>
              }
            >
              <Menu.Item key="5">Customers</Menu.Item>
              <Menu.Item key="6">Company</Menu.Item>
              <Menu.Item key="7">Purchase</Menu.Item>
              <Menu.Item key="8">Sales</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="appstore" />
                  <span>User Management</span>
                </span>
              }
            >
              <Menu.Item key="9">Change Profile</Menu.Item>
              <Menu.Item key="10">Logout</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </div>
    );
  }
}

export default Home;
