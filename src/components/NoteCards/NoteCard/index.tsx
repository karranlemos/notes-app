import { Close as CloseIcon } from '@material-ui/icons';
import React from 'react';

import useStyles from './styles';

export interface INoteCardParams {
  title: string;
  description: string;
  onClickCloseButton?: () => void;
}

const NoteCard: React.FC<INoteCardParams> = ({
  title,
  description,
  onClickCloseButton = () => { },
}) => {
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      <div className={classes.close}>
        <CloseIcon
          color="primary"
          onClick={onClickCloseButton}
          classes={{
            root: classes.closeIcon,
          }}
        />
      </div>
      <div className={classes.card}>
        <h2 className={classes.title}>
          {title}
        </h2>
        <span className={classes.description}>
          {description}
        </span>
      </div>
    </div>
  );
};

export default NoteCard;
