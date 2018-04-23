import React from 'react';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Pawn from './Pawn';

class Interactions extends React.Component {

    state = {
        selectedPawnValue: null,
    }

    handleClickPawn(value) {
        this.setState({
            selectedPawnValue: value
        })
    }

    // handleClickCheck(value) {

    // }

    // handleClickResetRaw(value) {

    // }

    // handleClickResetGame(value) {

    // }

    renderPawn(value) {
        return (
            <Pawn
                value={value}
                onClick={() => this.handleClickPawn(value)}
                isDisabled={false}
            />
        );
    }

    render() {
        return (
            <div>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        {this.renderPawn("⚽️")}
                        {this.renderPawn("🏀")}
                        {this.renderPawn("🏈")}
                        {this.renderPawn("⚾️")}
                    </Grid>
                    <Grid item xs={12}>
                        {this.renderPawn("🎾")}
                        {this.renderPawn("🏐")}
                        {this.renderPawn("🏉")}
                        {this.renderPawn("🎱")}
                    </Grid>
                </Grid>
                <Grid container spacing={8}>
                    <Grid item xs={12}>
                        <Button variant="raised" color="primary">Check</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="raised" color="primary">Reset row</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="raised" color="primary">Reset game</Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default Interactions;