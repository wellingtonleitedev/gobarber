import React, {
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback,
} from 'react';
import { TextInputProperties } from 'react-native';
import { useField } from '@unform/core';
import { Container, TextInput, Icon, Error } from './styles';

interface InputProps extends TextInputProperties {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}

interface InputRefProps {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRefProps, InputProps> = (
  { name, icon, ...rest },
  ref,
) => {
  const { registerField, fieldName, defaultValue = '', error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
  const inputElementRef = useRef<any>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  const handleInputOnFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputOnBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(_: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [registerField, fieldName]);

  return (
    <Container isFocused={isFocused} isErrored={!!error}>
      <Icon
        name={icon}
        size={20}
        color={isFocused || isFilled ? '#ff9000' : '#666360'}
      />
      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        defaultValue={defaultValue}
        onFocus={handleInputOnFocus}
        onBlur={handleInputOnBlur}
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
      {!!error && (
        <Error>
          <Icon name="alert-circle" size={20} color="#c53030" />
        </Error>
      )}
    </Container>
  );
};

export default forwardRef(Input);
