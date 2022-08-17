import joi from '@hapi/joi';

export const registerValidate = (data) => {
    const schema  = joi.object({
        name: joi.string().required().min(3).max(50),
        email: joi.string().required().min(3).max(50),
        password: joi.string().required().min(6).max(50)
    })

    return schema.validate(data)
}

export const loginValidate = (data) => {
    const schema  = joi.object({
        email: joi.string().required().min(3).max(50),
        password: joi.string().required().min(6).max(50)
    })

    return schema.validate(data)
}
