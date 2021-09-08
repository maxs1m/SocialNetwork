export const requiredField = value => {
    return value? undefined : 'Field is required'
}

export const maxLength = (length) => value => {
    return (value && value.length > length)?  'Max length is 30 symbols' : undefined
}



export const minLength = (length) => value => {
    return (value && value.length < length)?  'Min length is 2 symbols' : undefined
}

export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)
