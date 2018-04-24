import React from 'react';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Pawn from './Pawn';

class Interactions extends React.Component {

    renderPawn(value) {
        return (
            <Pawn
                value={value}
                onClick={() => this.props.choosePawnClick(value)}
                isDisabled={this.props.choosePawnIsDisabled}
            />
        );
    }

    render() {
        return (
            <div>
                <Grid container spacing={8}>
                    {/* <Grid item xs={12}>
                        {this.renderPawn('⚽️')}
                        {this.renderPawn('🏀')}
                        {this.renderPawn('🏈')}
                        {this.renderPawn('⚾️')}
                    </Grid>
                    <Grid item xs={12}>
                        {this.renderPawn('🎾')}
                        {this.renderPawn('🏐')}
                        {this.renderPawn('🏉')}
                        {this.renderPawn('🎱')}
                    </Grid> */}
                    <Grid item xs={12}>
                        {this.renderPawn('1')}
                        {this.renderPawn('2')}
                        {this.renderPawn('3')}
                        {this.renderPawn('4')}
                    </Grid>
                    <Grid item xs={12}>
                        {this.renderPawn('5')}
                        {this.renderPawn('6')}
                        {this.renderPawn('7')}
                        {this.renderPawn('8')}
                    </Grid>
                </Grid>
                <Grid container spacing={8}>
                    <Grid item xs={12}>
                        <Button variant="raised" color="primary" disabled={this.props.checkButtonIsDisabled} onClick={() => this.props.checkClick()}>
                            Check
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="raised" color="primary" onClick={() => this.props.resetRowClick()}>
                            Reset row
                        </Button>
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