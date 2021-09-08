import './App.css';
import React, {lazy} from "react";
import Nav from "./components/Nav/Nav";
import {
    Switch, Redirect,
    Route, withRouter
} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
/*import DialogsContainer from "./components/Dialogs/DialogsContainer";*/
import UsersContainer from "./components/Users/UsersContainer";
/*import ProfileContainer from "./components/Profile/ProfileContainer";*/
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initialize} from "./redux/appReducer";
import {compose} from "redux";
import Preloader from "./components/Common/Preloader";
import {WithSuspense} from "./components/HOK/WithSuspense";

const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"));


class App extends React.Component {
    componentDidMount() {
        this.props.initialize()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='add-wrapper__content'>
                    <Switch>
                        <Route exact path='/'>
                            <Redirect to='/profile'/>
                        </Route>
                        <Route path='/profile/:userId?'>
                            {WithSuspense(ProfileContainer)}
                        </Route>
                        <Route path='/dialogs'>
                            {WithSuspense(DialogsContainer)}
                        </Route>
                        <Route path='/news'>
                            <News/>
                        </Route>
                        <Route path='/music'>
                            <Music/>
                        </Route>
                        <Route path='/users'>
                            <UsersContainer/>
                        </Route>
                        <Route path='/settings'>
                            <Settings/>
                        </Route>
                        <Route path='/login'>
                            <Login/>
                        </Route>
                        <Route path='*'>
                            <div>404 not Found</div>
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps, {initialize}),
    withRouter
)(App);