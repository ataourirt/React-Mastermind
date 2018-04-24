import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Rows from './Rows';
import Rules from './Rules';
import Interactions from './Interactions';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPawnValue: null,
      currentRow: 0,
      currentColumn: 0,
      rowsValues: {
        0: ["", "", "", ""],
        1: ["", "", "", ""],
        2: ["", "", "", ""],
        3: ["", "", "", ""],
        4: ["", "", "", ""],
        5: ["", "", "", ""],
        6: ["", "", "", ""],
        7: ["", "", "", ""],
        8: ["", "", "", ""],
        9: ["", "", "", ""]
      },
    };
    this.choosePawnClick = this.choosePawnClick.bind(this);
    this.colorPawnClick = this.colorPawnClick.bind(this);
  }

  choosePawnClick(value) {
    var selectedPawnValue = this.state.selectedPawnValue;
    selectedPawnValue = value;
    this.setState({
      selectedPawnValue
    });
  }

  colorPawnClick() {
    var rowsValues = this.state.rowsValues;
    var currentRow = this.state.currentRow;
    var currentColumn = this.state.currentColumn;

    rowsValues[currentRow][currentColumn] = this.state.selectedPawnValue;

    if (currentColumn < 3) {
      currentColumn++;
    } else {
      currentColumn = 0;
      currentRow++;
    }

    this.setState({
      rowsValues,
      currentRow,
      currentColumn
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root} spacing={8}>
        <Grid item xs={4}>
          <Rules />
        </Grid>
        <Grid item xs={4}>
          <Rows
            values={this.state.rowsValues}
            colorPawnClick={this.colorPawnClick}
          />
        </Grid>
        <Grid item xs={4}>
          <Interactions
            choosePawnClick={this.choosePawnClick}
          />
        </Grid>
      </Grid>
    );
  }
}

Game.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Game);
