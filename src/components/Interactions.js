import React from 'react';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Pawn from './Pawn';

class Interactions extends React.Component {

    state = {
        valueOfSelectedButton: null,
    }

    onClickFab(i) {
        this.setState({
            valueOfSelectedButton: i
        })
    }

    renderPawn(value) {
        return (
            <Pawn
                value={value}
                onClick={() => this.onClickFab(value)}
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