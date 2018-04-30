import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Rows from './Rows';
import Rules from './Rules';
import Interactions from './Interactions';
import Utils from './Utils';

import yellow_button from './../icons/yellow_button.png';
import green_button from './../icons/green_button.png';
import red_button from './../icons/red_button.png';
import purple_button from './../icons/purple_button.png';
import pink_button from './../icons/pink_button.png';
import blue_button from './../icons/blue_button.png';
import turquoise_button from './../icons/turquoise_button.png';
import orange_button from './../icons/orange_button.png';
import white_button from './../icons/white_button.png';


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
  red: {
    backgroundColor: 'red'
  },
  blue: {
    backgroundColor: 'blue'
  }
});

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      answers: [yellow_button, green_button, red_button, purple_button],
      currentRow: 0,
      currentColumn: 0,
      rowsValues: {
        0: [white_button, white_button, white_button, white_button],
        1: [white_button, white_button, white_button, white_button],
        2: [white_button, white_button, white_button, white_button],
        3: [white_button, white_button, white_button, white_button],
        4: [white_button, white_button, white_button, white_button],
        5: [white_button, white_button, white_button, white_button],
        6: [white_button, white_button, white_button, white_button],
        7: [white_button, white_button, white_button, white_button],
        8: [white_button, white_button, white_button, white_button],
        9: [white_button, white_button, white_button, white_button]
      },
      goodPositionValues: ['', '', '', '', '', '', '', '', '', ''],
      goodColorsValues: ['', '', '', '', '', '', '', '', '', ''],
      choosePawnIsDisabled: false,
      checkButtonIsDisabled: true,
    };

    // que faire ??
    Utils.answers = this.state.answers;

    this.choosePawnClick = this.choosePawnClick.bind(this);
    this.checkClick = this.checkClick.bind(this);
    this.resetRowClick = this.resetRowClick.bind(this);
    this.newGameClick = this.newGameClick.bind(this);
  }

  choosePawnClick(value) {
    console.log(value);
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

    console.log(isWin);

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

    rowsValues[currentRow].fill(white_button);
    currentColumn = 0;

    this.resetButtons();

    this.setState({
      rowsValues,
      currentColumn,
    })
  }

  newGameClick() {
    this.resetDatas();
    this.resetButtons();
    this.createNewRandomAnswers();
  }

  resetDatas() {
    var rowsValues = this.state.rowsValues;
    var currentRow = this.state.currentRow;
    var currentColumn = this.state.currentColumn;
    var goodColorsValues = this.state.goodColorsValues;
    var goodPositionValues = this.state.goodPositionValues;

    currentRow = 0;
    currentColumn = 0;
    Object.keys(rowsValues).map(key => rowsValues[key].fill(white_button))
    goodColorsValues.fill('');
    goodPositionValues.fill('');

    this.setState({
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

    this.setState({
      choosePawnIsDisabled,
      checkButtonIsDisabled
    })
  }

  createNewRandomAnswers() {
    var answers = this.state.answers;
    var buttonsColors = [yellow_button, green_button,red_button, purple_button, pink_button, blue_button, turquoise_button, orange_button];

    answers = (Utils.shuffle(buttonsColors)).slice(0, 4);

    this.setState({
      answers
    })
    
  }


  render() {
    // const { classes } = this.props;

    return (
      <Grid container spacing={16}>
        <Grid item sm={4} className={this.props.classes.blue} >
          <Rules />
        </Grid>
        <Grid item sm={4} id="game" >
          <Rows
            rowsValues={this.state.rowsValues}
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
            newGameClick={this.newGameClick}
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
