import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import { get } from 'lodash';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  avatar: {
    margin: '1rem',
    width: '8rem',
    height: '8rem'
  }
}));

const MyLogo = ({ imgSrc, classNames, ...props }) => {
  const { avatar } = useStyles();
  return (
    <Fragment>
      <Avatar className={clsx(avatar, get(classNames, 'avatar', ''))} src={imgSrc} {...props} />
    </Fragment>
  );
};

export default MyLogo;