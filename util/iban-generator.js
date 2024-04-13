import { faker } from 'https://esm.sh/@faker-js/faker';


export const generatePolishIBAN = () => {
    return faker.finance.iban({ countryCode: 'PL' })
}