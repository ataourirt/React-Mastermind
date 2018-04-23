import React from 'react';
import Pawn from './Pawn';
import Grid from 'material-ui/Grid';

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
                {/* {this.renderRows()}
                {this.renderRows()}
                {this.renderRows()}
                {this.renderRows()}
                {this.renderRows()}
                {this.renderRows()}
                {this.renderRows()}
                {this.renderRows()}
                {this.renderRows()} */}
            </p>
        )
    }
}

class Rows extends React.Component {

    state = {
        currentRow: null,
        rowsValues: {
            // 0: ["⚽️", "⚽️", "⚽️", "⚽️"],
            // 1: ["🏀", "🏀", "🏀", "🏀"],
            // 2: ["🎾", "🎾", "🎾", "🎾"],
            0: ["", "", "", ""],
            1: ["", "", "", ""],
            2: ["", "", "", ""],
            // 6: ["", "", "", ""],
            // 7: ["", "", "", ""],
            // 8: ["", "", "", ""],
            // 9: ["", "", "", ""]
        },
    }

    renderRow(values) {
        return (
            <Row pawns={values} />
        );
    }

    render() {
        return (
            <div>
                <Grid container spacing={8}>
                    {Object.keys(this.state.rowsValues).map((key) => (
                        <Grid item xs={12} key={key}>
                            {this.renderRow(this.state.rowsValues[key])}
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    }
}

///////////

class Row extends React.Component {

    // state = {
    //     pawns: Array(4).fill("🎱"),
    // }

    renderPawn(value) {
        return (
            <Pawn value={value} />
        )

    }

    render() {
        return (
            <div>
                <Grid container spacing={8}>
                    {this.props.pawns.map((value, id) => (
                        <Grid item xs={6} sm={3} key={id}>
                            <p>{this.renderPawn(value)}</p>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}


export default BoardGame;