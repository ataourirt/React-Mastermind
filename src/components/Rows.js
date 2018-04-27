import React from 'react';
import Pawn from './Pawn';
import Grid from 'material-ui/Grid';

class Rows extends React.Component {
    render() {
        return (
            <Grid container spacing={0} id="rows">
                {Object.keys(this.props.rowsValues).map((key) => (
                    //fugly
                    <Grid container spacing={8} id="rows"> 
                        <Grid item xl={4} xs={4}>
                            <Grid container spacing={8} id="goodPositions">
                                <Grid item xl={6} xs={6}>
                                    {this.props.goodColorsValues[key]}
                                </Grid>
                                <Grid item xl={6} xs={6} id="goodColors">
                                    {this.props.goodPositionValues[key]}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xl={8} xs={8} id="row">
                            <Row
                                pawns={this.props.rowsValues[key]}
                            />
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        )
    }
}





class Row extends React.Component {

    render() {
        return (
            <div>
                <Grid container spacing={16}>
                    {this.props.pawns.map((value, id) => (
                        <Grid item sm={3} key={id}>
                            <Pawn
                                value={value}
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