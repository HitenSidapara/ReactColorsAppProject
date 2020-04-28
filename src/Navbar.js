import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import './Navbar.css';
import { MenuItem, Icon } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';



export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = { format: "hex", open: false }
        this.handleFormateChange = this.handleFormateChange.bind(this)
        this.closeSnackBar = this.closeSnackBar.bind(this)
    }
    handleFormateChange(e) {
        this.setState({ format: e.target.value, open: true })
        this.props.handleChange(e.target.value)
    }
    closeSnackBar() {
        this.setState({ open: false })
    }
    render() {
        const { level, changeLevel } = this.props;
        const { format } = this.state;
        return (
            <header className="Navbar">
                <div className="logo">
                    <a href="#">ReactColorPicker</a>
                </div>
                <div className="slider-container">
                    <span>Level : {level}</span>
                    <div className="slider">
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={changeLevel}
                        />
                    </div>
                </div>
                <div className="select-container">
                    <Select value={format} onChange={this.handleFormateChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RBG - rgb(255, 255 , 255)</MenuItem>
                        <MenuItem value="rgba">RBGA - rgb(255, 255 , 255, 1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={<span id="message-id">Formate Change TO {format.toUpperCase()}</span>}
                    onClose={this.closeSnackBar}
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    action={
                        [
                            <IconButton onClick={this.closeSnackBar} color="inherit" key="close" aria-label="close">
                                <CloseIcon />
                            </IconButton>
                        ]
                    }
                />
            </header>
        )
    }
}