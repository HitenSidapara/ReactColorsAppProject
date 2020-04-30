import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import { MenuItem } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/styles';
import styles from './styles/NavBarStyles';

class Navbar extends Component {
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
        const { level, changeLevel, showColorSlider, classes } = this.props;
        const { format } = this.state;
        return (
            <header className={classes.Navbar}>
                <div className={classes.logo}>
                    <Link to="/">ReactColorPicker</Link>
                </div>
                {showColorSlider &&
                    <div>
                        <span>Level : {level}</span>
                        <div className={classes.slider}>
                            <Slider
                                defaultValue={level}
                                min={100}
                                max={900}
                                step={100}
                                onAfterChange={changeLevel}
                            />
                        </div>
                    </div>
                }
                <div className={classes.selectContainer}>
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

export default withStyles(styles)(Navbar);