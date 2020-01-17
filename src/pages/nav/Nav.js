import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import Main from './main/Main';
import Chat from './chat/Chat';
import History from './history/History';
import My from './my/My';
import "./Nav.scss"
export default class Nav extends Component {
  state = {
    selectedTab: 'main',
    hidden: false,
    list: [{ title: "首页", key: "main", icon: "home1", selectedIcon: "home2" },
    { title: "微聊", key: "microChat", icon: "microChat1", selectedIcon: "microChat2" },
    { title: "足迹", key: "track", icon: "track1", selectedIcon: "track2" },
    { title: "我的", key: "my", icon: "my1", selectedIcon: "my2" },]
  }
  render() {
    let { list } = this.state
    return (
      <div className="navPage">
        <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#13227a  "
            barTintColor="white"
            hidden={this.state.hidden}
          >
            {list.map((obj) => <TabBar.Item
              icon={{ uri: require(`../../assets/imgs/${obj.icon}.png`) }}
              selectedIcon={{ uri: require(`../../assets/imgs/${obj.selectedIcon}.png`) }}
              title={obj.title}
              key="main"
              selected={this.state.selectedTab === obj.key}
              onPress={() => {
                this.setState({
                  selectedTab: obj.key
                });
              }}
            >
              {this.renderContent(obj.key)}
            </TabBar.Item>)}
          </TabBar>
        </div>
      </div>
    )
  }
  renderContent(pageText) {
    switch (this.state.selectedTab) {
      case "main": return <Main />
      case "microChat": return <Chat />
      case "track": return <History />
      case "my": return <My />
    }
  }

}
