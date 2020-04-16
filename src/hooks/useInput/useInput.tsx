import React from 'react';

export const useInput = (
    // initialValue = '',
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    validator?: (v: string) => boolean,
    format?: (v: string) => string,
) => {
    // const [value, setValue] = React.useState(initialValue);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        let newValue = event.target.value;
        let isValid = true;
        if (validator && typeof validator === 'function') {
            isValid = validator(newValue);
        }
        if (isValid) {
            if (format && typeof format === 'function') {
                newValue = format(newValue);
            }
            setValue(newValue);
        }
    };
    return {
        value,
        onChange,
    };
};
