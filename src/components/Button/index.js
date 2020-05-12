import React, { Fragment } from 'react';
import clsx from 'clsx';
import { get } from 'lodash';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  margin: {
    margin: '1rem'
  }
}));

const CustomButton = ({ type, classNames, ...props }) => {

  const { margin } = useStyles();

  return (
    <Fragment>
      <Button
        variant="contained"
        size="large"
        color="primary"
        className={clsx(margin, get(classNames, 'button', ''))}
        type={type}
        {...props}
      >
        {props.children}
      </Button>
    </Fragment>
  );

};

export default CustomButton;