import React from 'react';
import Pawn from './Pawn';

class BoardGame extends React.Component {

    renderRows(props) {
        return (
            <Rows />
        )
    }
    render() {
        return (
            <p className="App-intro">
                {this.renderRows()}
                {this.renderRows()}
                {this.renderRows()}
                {this.renderRows()}
                {this.renderRows()}
                {this.renderRows()}
                {this.renderRows()}
                {this.renderRows()}
                {this.renderRows()}
                {this.renderRows()}
            </p>
        )
    }
}

class Rows extends React.Component {

    renderRow(props) {
        return (
            <Row />
        );
    }


    render() {
        return (
            <div className="board-row">
                {this.renderRow(0)}
                {this.renderRow(1)}
                {this.renderRow(2)}
                {this.renderRow(3)}
            </div>
        )
    }
}

///////////

function Row(props) {
    return (
        // <Pawn color="secondary" isDisabled = "true"/>
        <Pawn icon="🏀"/>
    );
}


export default BoardGame;