import React from 'react';

import useStyles from './styles';

export interface INoteCardParams {
  title: string,
  description: string,
}

const NoteCard: React.FC<INoteCardParams> = ({
  title,
  description,
}) => {
  const classes = useStyles();

  return (
    <div
      className={classes.card}
    >
      <h2 className={classes.title}>
        {title}
      </h2>
      <span className={classes.description}>
        {description}
      </span>
    </div>
  );
};

export default NoteCard;
