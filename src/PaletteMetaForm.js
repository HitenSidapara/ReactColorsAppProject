import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css'



class PaletteMetaForm extends Component {
    state = { open: true, newPaletteName: "" }

    handleClickOpen = () => {
        this.setState({ open: true })
    };

    handleClose = () => {
        this.setState({ open: false })
    };
    componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
            this.props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    }
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    render() {
        const { newPaletteName } = this.state
        const { hideForm, handleSubmit } = this.props
        return (
            <Dialog open={this.state.open} onClose={hideForm} aria-labelledby="form-dialog-title">
                <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
                    <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter a name for your beautiful palette.Make sure it's unique!
                  </DialogContentText>
                        <Picker/>
                        <TextValidator label="Palette Name"
                            name="newPaletteName"
                            value={this.state.newPaletteName}
                            onChange={this.handleChange}
                            fullWidth
                            margin="normal"
                            validators={["required", "isPaletteNameUnique"]}
                            errorMessages={["Enter PaletteName", "PaletteName already used."]}
                        />

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={hideForm} color="primary">
                            Cancel
                  </Button>
                        <Button variant="contained" color="primary" type="submit">
                            Save Palette
                            </Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        );
    }
}

export default PaletteMetaForm;