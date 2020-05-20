import * as React from 'react';

import styled                          from '../../../config/styled';
import { useEffect, useState } from 'react';
import { Icon }                        from '../../icon';
import { TextInput, InputProps } from '../text';

const PasswordInputContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const ShowHide = styled.div`
    position: absolute;
    right: 30px;
`;

export const PasswordInput: React.FunctionComponent<InputProps & {className?: string}> = (props: InputProps): JSX.Element => {
    const [ passwordState, setPasswordState ] = useState('password');
    const [ showPassword, setShowPassword ] = useState(false);

    useEffect(() => {
        setPasswordState(showPassword ? 'text' : 'password');
    }, [ showPassword ]);

    return <PasswordInputContainer>
        <TextInput
        error={props.error}
        label={props.label}
        name={props.name}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
        value={props.value}
        className={props.className}
        type={passwordState}
        />
        <ShowHide onClick={() => {
            setShowPassword(!showPassword);
            document.getElementById(props.name)?.focus();
        }}>
            <Icon
            icon='show'
            color={showPassword ? '#FFF' : '#666'}
            size='20px'/>
        </ShowHide>
    </PasswordInputContainer>
};

export default TextInput;
