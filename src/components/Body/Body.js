import React from "react";
import "./Body.sass";
import StarterToolBar from "./HeadToolBar/StarterToolBar/StarterToolBar";
import NewOpenSaveGroup from "./HeadToolBar/FormToolBar/NewOpenSaveGroup";
import HistoryGroup from "./HeadToolBar/FormToolBar/HistoryGroup";
import SelectEditGroup from "./HeadToolBar/FormToolBar/SelectEditGroup";
import PropertiesGroup from "./HeadToolBar/FormToolBar/PropertiesGroup";
import FormName from "./HeadToolBar/FormToolBar/FormName";

import ElementBuilderGroup from "./HeadToolBar/FormToolBar/ElementBuilderGroup";

import PreviewGroup from "./HeadToolBar/FormToolBar/PreviewGroup";

import ElementBuilderTool from "./HeadToolBar/ElementToolBar/ElementBuilderTool";

import StylingTool from "./HeadToolBar/StyleToolBar/StylingTool";
import ElementToolKit from "./SideBar/LeftSideBar/ElementToolKit/ElementToolKit";
import RowsToolKit from "./SideBar/LeftSideBar/RowsToolKit/RowsToolKit";
import LibraryToolKit from "./SideBar/LeftSideBar/LibraryToolKit/LibraryToolKit";
import PropertiesToolKit from "./SideBar/LeftSideBar/PropertiesToolKit/PropertiesToolKit";
import ConditionToolKit from "./SideBar/LeftSideBar/ConditionToolKit/ConditionToolKit";
import WorkplaceTagGroup from "./BodyWorkPlace/WorkplaceTagGroup";
import Header from "../Header/Header";
import Containerwb from "./BodyWorkPlace/FormWorkPlace";

class Body extends React.Component {
  constructor() {
    super();

    this.state = {
      enter: true,
      form: []
    };
  }
  handelclick = () => {
    this.setState({
      form: <Containerwb />
    });
  };
  openForm = () => {
    this.setState({ enter: false });
  };
  render() {
    return (
      <div>
        <Header showBtns={this.state.enter} />

        <div id="bodyContainer">
          {this.state.enter && (
            <div id="start">
              <StarterToolBar
                onClickNew={this.openForm}
                className="toolGroup"
              />
            </div>
          )}
          {!this.state.enter && (
            <div>
              <div id="headerToolBarContainer">
                <div id="formToolBarContainer" className="toolContainer">
                  <NewOpenSaveGroup className="toolGroup" />
                  <HistoryGroup className="toolGroup" />
                  <SelectEditGroup className="toolGroup" />
                  <PropertiesGroup className="toolGroup" />
                  <FormName className="toolGroup" />
                  <ElementBuilderGroup className="toolGroup" />
                  <PreviewGroup className="toolGroup" />
                </div>
                <div id="elementToolBarContainer" className="toolContainer">
                  <ElementBuilderTool className="toolGroup" />
                </div>
                <div id="styleToolBarContainer" className="toolContainer">
                  <StylingTool className="toolGroup" />
                </div>
              </div>
              <div id="left" className="sideBarContainer">
                <RowsToolKit
                  handelclick={this.handelclick}
                  className="toolGroup"
                />
                <ElementToolKit className="toolGroup" />
                <LibraryToolKit className="toolGroup" />
                <PropertiesToolKit className="toolGroup" />
                <ConditionToolKit className="toolGroup" />
              </div>
              <div id="workPlace">
                <WorkplaceTagGroup className="toolGroup" />
              </div>
              <div id="right" className="sideBarContainer" />
              <div id="fotterContainer" />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Body;
