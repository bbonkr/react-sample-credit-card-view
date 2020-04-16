import React from 'react';
import { useInput } from '../../hooks/useInput';
import './style.css';

interface CreditCardViewProps {
    value?: string;
    onCardNumberChange?: (value: string) => void;
    onMonthChange?: (value: string) => void;
    onYearChange?: (value: string) => void;
    onCvsChange?: (value: string) => void;
}

export const CreditCardView = ({
    value,
    onCardNumberChange,
    onMonthChange,
    onYearChange,
    onCvsChange,
}: CreditCardViewProps) => {
    const [cardNumber1, setCardNumber1] = React.useState(
        (value || '').substr(0, 4),
    );
    const [cardNumber2, setCardNumber2] = React.useState(
        (value || '').substr(4, 4),
    );
    const [cardNumber3, setCardNumber3] = React.useState(
        (value || '').substr(8, 4),
    );
    const [cardNumber4, setCardNumber4] = React.useState(
        (value || '').substr(12, 4),
    );

    const [month, setMonth] = React.useState('');
    const [year, setYear] = React.useState('');

    const [cvs, setCvs] = React.useState('');

    React.useEffect(() => {
        if (onCardNumberChange) {
            onCardNumberChange(
                `${cardNumber1}${cardNumber2}${cardNumber3}${cardNumber4}`,
            );
        }
    }, [
        cardNumber1,
        cardNumber2,
        cardNumber3,
        cardNumber4,
        onCardNumberChange,
    ]);

    React.useEffect(() => {
        if (onMonthChange) {
            onMonthChange(month);
        }
    }, [month, onMonthChange]);
    React.useEffect(() => {
        if (onYearChange) {
            onYearChange(year);
        }
    }, [year, onYearChange]);
    React.useEffect(() => {
        if (onCvsChange) {
            onCvsChange(cvs);
        }
    }, [cvs, onCvsChange]);

    const validateCardNumber = (value: string): boolean => {
        if (value.length > 4) {
            return false;
        }

        const pattern = /^\d*$/;
        const regex = new RegExp(pattern);
        if (!regex.test(value)) {
            return false;
        }

        return true;
    };

    const validateMonth = (value: string): boolean => {
        if (value.length > 2) {
            return false;
        }

        const pattern = /^\d*$/;
        const regex = new RegExp(pattern);
        if (!regex.test(value)) {
            return false;
        }

        const intValue = parseInt(value, 10);

        if (intValue > 12) {
            return false;
        }

        if (value.length > 1 && intValue < 1) {
            return false;
        }

        return true;
    };

    const validateYear = (value: string): boolean => {
        if (value.length > 2) {
            return false;
        }

        const pattern = /^\d*$/;
        const regex = new RegExp(pattern);
        if (!regex.test(value)) {
            return false;
        }

        const currentYear = new Date()
            .getFullYear()
            .toString()
            .substr(2, 2);

        if (value.length > 1 && value < currentYear) {
            return false;
        }

        return true;
    };

    const validateCvs = (value: string): boolean => {
        if (value.length > 3) {
            return false;
        }

        const pattern = /^\d*$/;
        const regex = new RegExp(pattern);
        if (!regex.test(value)) {
            return false;
        }

        return true;
    };

    const cardNumber1InputProps = useInput(
        cardNumber1,
        setCardNumber1,
        validateCardNumber,
    );
    const cardNumber2InputProps = useInput(
        cardNumber2,
        setCardNumber2,
        validateCardNumber,
    );
    const cardNumber3InputProps = useInput(
        cardNumber3,
        setCardNumber3,
        validateCardNumber,
    );
    const cardNumber4InputProps = useInput(
        cardNumber4,
        setCardNumber4,
        validateCardNumber,
    );
    const monthInputProps = useInput(month, setMonth, validateMonth);
    const yearInputProps = useInput(year, setYear, validateYear);
    const cvsInputProps = useInput(cvs, setCvs, validateCvs);

    return (
        <div className="card">
            <div className="input-group">
                <label className="input-label">Card number</label>
                <div className="input-horizontal">
                    <input
                        className="card-number-input"
                        {...cardNumber1InputProps}
                    />
                    <input
                        className="card-number-input"
                        type="password"
                        {...cardNumber2InputProps}
                    />
                    <input
                        className="card-number-input"
                        type="password"
                        {...cardNumber3InputProps}
                    />
                    <input
                        className="card-number-input"
                        {...cardNumber4InputProps}
                    />
                </div>
            </div>
            <div className="input-group">
                <label className="input-label">MM/YY</label>
                <div className="input-horizontal">
                    <input className="card-number-input" {...monthInputProps} />

                    <input className="card-number-input" {...yearInputProps} />
                </div>
            </div>
            <div className="input-group">
                <label className="input-label">CVS</label>
                <div className="input-horizontal">
                    <input
                        className="card-number-input"
                        type="password"
                        {...cvsInputProps}
                    />
                </div>
            </div>
        </div>
    );
};
