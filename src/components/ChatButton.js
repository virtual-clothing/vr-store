import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Chat';
import Icon from '@material-ui/core/Icon';
import { connect } from 'react-redux';
import { toggleChat } from './ducks/reducer';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <div style={{position: 'fixed', bottom: '1rem', right: '1rem', zIndex: 1}}>
      <Button variant="raised" color="black" aria-label="add" className={classes.button}
        onClick={() => props.toggleChat()}
      >
        <AddIcon />
      </Button>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default connect(null, { toggleChat })(withStyles(styles)(FloatingActionButtons));