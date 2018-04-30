import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import Button from 'material-ui/Button';
import classNames from 'classnames';
import FontIcon from 'material-ui/FontIcon';

const styles = theme => ({
    // blueButton: {
    //     margin: theme.spacing.unit,
    //     backgroundColor: 'blue',
    // },
    // redButton: {
    //     margin: theme.spacing.unit,
    //     backgroundColor: 'red',
    // },

    // root: {
    //     backgroundColor: 'red',
    // },
});


class Pawn extends React.Component {

    render() {

        const { classes } = this.props;

        return (
            <button disabled={this.props.isDisabled} onClick={this.props.onClick}>
                <img src={this.props.img}/>
            </button>
        )
    }
}

Pawn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pawn);