import React from "react";
import {Field, Form} from "react-final-form";
import {Input} from "../Common/FormsControls";
import {requiredField} from "../../Utilites/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const Login = ({isAuth, login, errorMessage}) => {
    if (isAuth) return <Redirect to={'/profile'}/>

    return (
        <div>
            <h1>Login</h1>
            <LoginForm login={login} errorMessage={errorMessage}/>
        </div>
    )
}

class LoginForm extends React.Component {

    onSubmit = (data) => {
        this.props.login(data.login, data.password, data.rememberMe)
    }

    render() {
        return (
            <Form
                onSubmit={this.onSubmit}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Field
                                name="login"
                                component={Input}
                                placeholder={'Login'}
                                validate={requiredField}
                                submitError={this.props.errorMessage}
                            />
                        </div>
                        <div>
                            <Field name="password" component={Input} placeholder={'Password'} validate={requiredField} />
                        </div>
                        <div>
                            <Field name="rememberMe"  component="input" type='checkbox'/>
                            <label>remember me</label>
                        </div>
                        <div>
                            <button type="submit">Login</button>
                        </div>
                    </form>
                )}
            />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        errorMessage: state.auth.errorMessage
    }
}

export default connect(mapStateToProps, {login})(Login)