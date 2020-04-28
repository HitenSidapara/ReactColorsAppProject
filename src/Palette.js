import React, { Component } from 'react'
import ColorBox from './ColorBox';
import './Palette.css';

export default class Palette extends Component {
    render() {
        const colorBoxes = this.props.colors.map(color => {
            return <ColorBox background={color.color} name={color.name} />
        })
        return (
            <div className="Palette">
                {/* NavBar Comes Here */}
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                {/* Footer Comes Here */}
            </div>
        )
    }
}
