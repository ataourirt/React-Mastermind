import React from 'react';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Pawn from './Pawn';

import yellow_button from './../icons/yellow_button.png';
import green_button from './../icons/green_button.png';
import red_button from './../icons/red_button.png';
import purple_button from './../icons/purple_button.png';
import pink_button from './../icons/pink_button.png';
import blue_button from './../icons/blue_button.png';
import turquoise_button from './../icons/turquoise_button.png';
import orange_button from './../icons/orange_button.png';

class Interactions extends React.Component {

    renderPawn(value) {
        return (
            <Pawn
                onClick={() => this.props.choosePawnClick(value)}
                isDisabled={this.props.choosePawnIsDisabled}
                img={value}
            />
        );
    }

    render() {
        return (
            <div>
                <Grid container spacing={8}>
                    <Grid item sm={12}>
                        {this.renderPawn(yellow_button)}
                        {this.renderPawn(green_button)}
                        {this.renderPawn(red_button)}
                        {this.renderPawn(purple_button)}
                    </Grid>
                    <Grid item sm={12}>
                        {this.renderPawn(pink_button)}
                        {this.renderPawn(blue_button)}
                        {this.renderPawn(turquoise_button)}
                        {this.renderPawn(orange_button)}
                    </Grid>
                </Grid>
                <Grid container spacing={8}>
                    <Grid item sm={12}>
                        <Button variant="raised" color="primary" disabled={this.props.checkButtonIsDisabled} onClick={() => this.props.checkClick()}>
                            Check
                        </Button>
                    </Grid>
                    <Grid item sm={12}>
                        <Button variant="raised" color="secondary" onClick={() => this.props.resetRowClick()}>
                            Reset row
                        </Button>
                    </Grid>
                    <Grid item sm={12}>
                        <Button variant="raised" color="primary" onClick={() => this.props.newGameClick()}>New game</Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default Interactions;