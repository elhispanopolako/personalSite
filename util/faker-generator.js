import { faker } from 'https://esm.sh/@faker-js/faker';


export const generatePolishIBAN = () => {
    return faker.finance.iban({ countryCode: 'PL' })
}
export const generateRandomIBAN = () => {
    return faker.finance.iban()
}
export const generateVIN = () => {
    return faker.vehicle.vin()
}
export const generateBIC = () => {
    return faker.finance.bic()
}
export const generateUUID = () => {
    return faker.string.uuid()
}