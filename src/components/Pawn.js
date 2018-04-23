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

function Pawn(props) {
  const { classes } = props;
//   console.log(props)
  return (
      <Button variant="fab"  mini={true} className={classes.button} onClick={props.onClick} disabled={props.isDisabled}>
        {props.value}
      </Button>
  );
}

Pawn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pawn);
