import React from 'react';
import Pawn from './Pawn';
import Grid from 'material-ui/Grid';

class Rows extends React.Component {
    render() {
        return (
            <div>
                <Grid container spacing={8}>
                    {Object.keys(this.props.values).map((key) => (
                        <Grid item xs={8} key={key}>
                            <Row
                                pawns={this.props.values[key]}
                                colorPawnClick={() => this.props.colorPawnClick()}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    }
}

///////////

class Row extends React.Component {

    render() {
        return (
            <div>
                <Grid container spacing={8}>
                    {this.props.pawns.map((value, id) => (
                        <Grid item xs={6} sm={3} key={id}>
                            <Pawn
                                value={value}
                                onClick={() => this.props.colorPawnClick()}
                                isDisabled={false}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}


export default Rows;