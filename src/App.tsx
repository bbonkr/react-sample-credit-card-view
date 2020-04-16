import React from 'react';
import { CreditCardView } from './components/CreditCardView';

export const App = () => {
    const [cardNumber, setCardNumber] = React.useState('');
    const [year, setYear] = React.useState('');
    const [month, setMonth] = React.useState('');
    const [cvs, setCvs] = React.useState('');

    const handleCardNumberChange = (value: string) => {
        setCardNumber(value);
    };

    const handleYearChange = (value: string) => {
        setYear(value);
    };
    const handleMonthChange = (value: string) => {
        setMonth(value);
    };

    const handleCvsChange = (value: string) => {
        setCvs(value);
    };

    return (
        <div>
            <h1>Credit Card</h1>
            <hr />

            <CreditCardView
                value={cardNumber}
                onCardNumberChange={handleCardNumberChange}
                onYearChange={handleYearChange}
                onMonthChange={handleMonthChange}
                onCvsChange={handleCvsChange}
            />

            <hr />
            <div>
                <table>
                    <caption>Print inputs</caption>
                    <thead>
                        <tr>
                            <th>Card number</th>
                            <th>Year</th>
                            <th>Month</th>
                            <th>CVS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{cardNumber}</td>
                            <td>{year}</td>
                            <td>{month}</td>
                            <td>{cvs}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
