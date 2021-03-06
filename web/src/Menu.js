import React from 'react';
import InfoModal from './Modal';
import { push as Menu } from 'react-burger-menu'
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Selfie2Anime from './Selfie2Anime'
import FaceChange from './FaceChange'
import faceResult from './FaceResult'
import Selfie2AnimeResult from './Selfie2AnimeResult'

class Slide extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }
  
  render () {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Menu isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
        disableAutoFocus>
            <h1>메뉴</h1>
            <br></br>
            <Link onClick={() => this.closeMenu()} to="/">
                페이스 체인지
            </Link>
            <Link onClick={() => this.closeMenu()} to="/selfie2anime">
                Selfie2Anime
            </Link>

            <a onClick={() => this.closeMenu()} className="menu-item" href="https://github.com/znznz6037/GANFaceChanger">
                GitHub
            </a>
            <a onClick={() => this.closeMenu()} className="menu-item" href="javascript:void(0)">
                <InfoModal/>
            </a>
        </Menu>
            <Switch>
                <Route exact path="/" component={FaceChange}/>
                <Route path="/selfie2anime" component={Selfie2Anime}/>
                <Route path="/faceResult" component={faceResult}/>
                <Route path="/animeResult" component={Selfie2AnimeResult}/>
            </Switch>
        </Router>
    );
  }
}

export default Slide