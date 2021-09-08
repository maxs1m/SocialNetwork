import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        text: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.text)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                text: this.props.status
            })
        }
    }

    updateStatus = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode ?
                    <input
                        onBlur={this.deactivateEditMode}
                        value={this.state.text}
                        autoFocus={true}
                        onChange={this.updateStatus}
                    /> :
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>}
            </div>
        )
    }
}

export default ProfileStatus