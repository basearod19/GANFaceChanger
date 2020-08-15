import React, { Component, useState } from 'react';
import "./styles.css";
import './index.css';
import Header from './Header';
import Menu from './Menu';
import { Spinner, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

class App extends Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render() {
    return (
      <div className="App">
        <div><Menu/></div>
        <header className="App-header">
          <div id="border">
            <div className="loading" id = "loading">
              <div>
                <Spinner type="grow" color="primary" />
                <Spinner type="grow" color="secondary" />
                <Spinner type="grow" color="success" />
                <Spinner type="grow" color="danger" />
                <Spinner type="grow" color="warning" />
                <Spinner type="grow" color="info" />
                <Spinner type="grow" color="dark" />
              </div>
              <p id="ptext">딥러닝 작업이 수행되고 있습니다. 10초 정도만 기다려주세요.</p>
            </div>
            <div id="notLoading">
                <form id="upload" action="http://34.64.112.90:5000/upload" method="POST" encType="multipart/form-data">
                  <div id="border_title">
                      <h1 id="title">페이스 체인지</h1>
                  </div>
                  <div id = "file_upload">
                       <label htmlFor="file" id="label">클릭해서 이미지를 업로드 해주세요.</label>
                      <input type="file" name="file" id="image" accept="image/*"/>
                      <div id ="uploaded_img"></div>
                  </div>              
                      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret>
                          Dropdown
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem>Some Action</DropdownItem>
                          <DropdownItem disabled>Action (disabled)</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>금발</DropdownItem>
                          <DropdownItem>흑발</DropdownItem>
                          <DropdownItem>안경</DropdownItem>
                          <DropdownItem>화장</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                  <Button id="submit" outline color="secondary" type="submit" size="lg" block>실행</Button> 
                </form>
            </div>
            <p id="ptext">얼굴이 정중앙에 위치하게 218 * 178 크기로 업로드해주세요.</p>
        </div>
        </header>
      </div>
    );
  }
}

export default App;