import { Input, FormHelperText, FormControl } from '@material-ui/core';
import React, {
  useState,
  forwardRef,
  ChangeEventHandler,
  useImperativeHandle,
} from 'react';

import useStyles from './styles';

type OnChangeType = ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;

interface IInputItemProps {
  placeholder: string;
  onChange?: OnChangeType;
  inputClasses?: string;
  multiline?: boolean;
  value?: string;
}

export interface IInputItemRef {
  enableError(errorMessage: string): void;
  disableError(): void;
}

const InputItem = forwardRef<IInputItemRef, IInputItemProps>((
  {
    placeholder,
    onChange: onChangeExternal = () => { },
    inputClasses = undefined,
    value = undefined,
    multiline = false,
  },
  ref,
) => {
  const [error, setError] = useState<string | null>(null);
  const classes = useStyles({ hasError: error !== null });

  const enableError = (errorMessage: string) => {
    setError(errorMessage);
  };

  const disableError = () => {
    setError(null);
  };

  useImperativeHandle(ref, () => ({
    enableError,
    disableError,
  }));

  const onChange: OnChangeType = (event) => {
    disableError();
    onChangeExternal(event);
  };

  return (
    <FormControl>
      <Input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        multiline={multiline}
        classes={{
          root: inputClasses,
        }}
        disableUnderline
      />
      <FormHelperText
        error
        classes={{
          root: classes.errorText,
        }}
      >
        {error}
      </FormHelperText>
    </FormControl>
  );
});

export default InputItem;
