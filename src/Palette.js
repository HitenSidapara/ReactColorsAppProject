import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar'
import './Palette.css';

export default class Palette extends Component {
    constructor(props) {
        super(props)
        this.state = { level: 500, format: "hex" }
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormate = this.changeFormate.bind(this)
    }
    changeLevel(level) {
        this.setState({ level })
    }
    changeFormate(val) {
        this.setState({ format: val })
    }
    render() {
        const { colors, paletteName, emoji } = this.props.palette;
        const { level, format } = this.state;
        const colorBoxes = colors[level].map(color => {
            return <ColorBox background={color[format]} name={color.name} key={color.id} />
        })
        return (
            <div className="Palette">
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormate} />
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                <footer className="palette-footer">
                    {paletteName}
                    <span className="emoji">{emoji}</span>
                </footer>
            </div>
        )
    }
}
