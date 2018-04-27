import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Rows from './Rows';
import Rules from './Rules';
import Interactions from './Interactions';
import Utils from './Utils';

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
      // answers: ['🎾', '🏀', '🏈','⚽'],
      answers: ['1', '2', '3', '4'],
      currentRow: 0,
      currentColumn: 0,
      rowsValues: {
        0: ['', '', '', ''],
        1: ['', '', '', ''],
        2: ['', '', '', ''],
        3: ['', '', '', ''],
        4: ['', '', '', ''],
        5: ['', '', '', ''],
        6: ['', '', '', ''],
        7: ['', '', '', ''],
        8: ['', '', '', ''],
        9: ['', '', '', '']
      },
      goodPositionValues: ['','','','','','','','','',''],
      goodColorsValues: ['','','','','','','','','',''],
      choosePawnIsDisabled: false,
      checkButtonIsDisabled: true,
    };

    // que faire ??
    Utils.answers = this.state.answers;

    this.choosePawnClick = this.choosePawnClick.bind(this);
    this.checkClick = this.checkClick.bind(this);
    this.resetRowClick = this.resetRowClick.bind(this);
    this.resetGameClick = this.resetGameClick.bind(this);
  }

  choosePawnClick(value) {
    var rowsValues = this.state.rowsValues;
    var currentRow = this.state.currentRow;
    var currentColumn = this.state.currentColumn;
    var choosePawnIsDisabled = this.state.choosePawnIsDisabled;
    var checkButtonIsDisabled = this.state.checkButtonIsDisabled;

    rowsValues[currentRow][currentColumn] = value;

    if (currentColumn < 3) {
      currentColumn++;
      choosePawnIsDisabled = false;
    } else if (currentColumn === 3) {
      choosePawnIsDisabled = true;
      checkButtonIsDisabled = false;
    }

    this.setState({
      rowsValues,
      currentRow,
      currentColumn,
      choosePawnIsDisabled,
      checkButtonIsDisabled
    })
  }

  checkClick() {
    var currentRowValues = this.state.rowsValues[this.state.currentRow];
    // console.log("Answers: " + this.state.answers);
    // console.log("Current row: " + currentRowValues);

    var isWin = Utils.isWin(currentRowValues);

    // console.log(isWin);

    if (!isWin) {

      var currentRow = this.state.currentRow;
      var currentColumn = this.state.currentColumn;
      var choosePawnIsDisabled = this.state.choosePawnIsDisabled;
      var checkButtonIsDisabled = this.state.checkButtonIsDisabled;
      var goodColorsValues = this.state.goodColorsValues;
      var goodPositionValues = this.state.goodPositionValues;

      goodColorsValues[currentRow] = Utils.numberOfGoodColors(currentRowValues);
      goodPositionValues[currentRow] = Utils.numberOfGoodPosition(currentRowValues);

      currentColumn = 0;
      currentRow++;
      choosePawnIsDisabled = false;
      checkButtonIsDisabled = true;

      this.setState({
        currentColumn,
        currentRow,
        choosePawnIsDisabled,
        checkButtonIsDisabled,
        goodColorsValues,
        goodPositionValues
      })
    }
  }

  resetRowClick() {
    var rowsValues = this.state.rowsValues;
    var currentRow = this.state.currentRow;
    var currentColumn = this.state.currentColumn;

    rowsValues[currentRow].fill('');
    currentColumn = 0;

    this.resetButtons();
  
    this.setState ({
      rowsValues,
      currentColumn,
    })
  }

  resetGameClick() {
    this.resetDatas();
    this.resetButtons();
  }

  resetDatas() {
    var rowsValues = this.state.rowsValues;
    var currentRow = this.state.currentRow;
    var currentColumn = this.state.currentColumn;
    var goodColorsValues = this.state.goodColorsValues;
    var goodPositionValues = this.state.goodPositionValues;

    currentRow = 0;
    currentColumn = 0;
    Object.keys(rowsValues).map(key => rowsValues[key].fill(''))
    goodColorsValues.fill('');
    goodPositionValues.fill('');

    this.setState ({
      rowsValues,
      currentRow,
      currentColumn,
      goodColorsValues,
      goodPositionValues
    })
  }

  resetButtons() {
    var choosePawnIsDisabled = this.state.choosePawnIsDisabled;
    var checkButtonIsDisabled = this.state.checkButtonIsDisabled;
  
    choosePawnIsDisabled = false;
    checkButtonIsDisabled = true;

    this.setState ({
      choosePawnIsDisabled,
      checkButtonIsDisabled
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={16}>
        <Grid item sm={4} id="rules" >
          <Rules />
        </Grid>
        <Grid item sm={4} id="game" >
          <Rows
            rowsValues={this.state.rowsValues}
            // scoreValues={this.state.scoreValues}
            goodColorsValues={this.state.goodColorsValues}
            goodPositionValues={this.state.goodPositionValues}
          />
        </Grid>
        <Grid item sm={4} id="interactions">
          <Interactions
            choosePawnIsDisabled={this.state.choosePawnIsDisabled}
            checkButtonIsDisabled={this.state.checkButtonIsDisabled}
            choosePawnClick={this.choosePawnClick}
            checkClick={this.checkClick}
            resetRowClick={this.resetRowClick}
            resetGameClick={this.resetGameClick}
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
