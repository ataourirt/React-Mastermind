import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

class Pawn extends React.Component {
    render() {

        const { classes } = this.props;

        return (
            <Button variant="fab" mini={true} className={classes.button} disabled={this.props.isDisabled} onClick={this.props.onClick}>
                {this.props.value}
            </Button>
        )
    }
}

Pawn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pawn);