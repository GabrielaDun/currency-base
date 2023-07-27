import ResultBox from './ResultBox';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

const testCases = [
    { amount: 100, from: 'PLN', to: 'USD', expect: 'PLN 100.00 = $28.57' },
    { amount: 20, from: 'USD', to: 'PLN', expect: '$20.00 = PLN 70.00'  },
    { amount: 200, from: 'PLN', to: 'USD', expect: 'PLN 200.00 = $57.14'  },
    { amount: 345, from: 'USD', to: 'PLN', expect: '$345.00 = PLN 1,207.50'  },
];

  describe('Component ResultBox', () => {
    for (const testObj of testCases) {
        it ('should render without crashing', () => {
            render (<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />)
        })
        it ('should render proper info about conversion when PLN -> USD', () => {
            render (<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />)

            const resultComponent = screen.getByTestId('result-component')
            //const One = testObj.expect
            expect(resultComponent).toHaveTextContent(testObj.expect);
        })
    }
});
