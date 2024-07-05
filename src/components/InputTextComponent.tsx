import React, {useState} from "react";

interface IInputTextComponentProps {
    value: string;
    setValue: (value: string) => void;
    label: string;
    id: string;
    inputBorderColor: string;
    inputBorderColorError: string;
    text_error: string;
}

export default function InputTextComponent({
                                               value,
                                               setValue,
                                               inputBorderColor,
                                               label,
                                               id,
                                               inputBorderColorError,
                                               text_error,
                                           }: IInputTextComponentProps): JSX.Element {

    const [isFocused, setIsFocused] = useState<string>('');


    function handleFocusInput(event: React.FocusEvent<HTMLInputElement>) {
        console.log(event);
        setIsFocused('on');
    }

    function handleBlurInput(event: React.FocusEvent<HTMLInputElement>) {
        console.log(event);
        setIsFocused('off');
    }

    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-left text-sm font-bold mb-2" htmlFor={id}>
                {label}
            </label>
            <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    isFocused === 'off' && value === '' ? `border-${inputBorderColorError}` : `border-${inputBorderColor}`
                }`}
                id={id}
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={(event) => handleFocusInput(event)}
                onBlur={(event) => handleBlurInput(event)}
            />
            {isFocused === 'off' && value === '' && (
                <p className={`text-${inputBorderColorError} text-xs italic`}>
                    {text_error}
                </p>
            )}
        </div>
    );
}