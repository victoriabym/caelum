import { useState } from 'react';

export default function useFormValidator(validations) {
    const [erros, setErros] = useState(createInitialState());   
    const [values, setValues] = useState(createInitialState());
    const [isFormValid, setFormValid] = useState(false);

    function createInitialState() {
        const defaultValues = {};

        for (let prop in validations) {
            defaultValues[prop] = '';
        }

        return defaultValues;
    }

    function validate(event) {
        const { name, value } = event.target;
        erros[name] = validations[name](value); // validations.login()
        values[name] = value;

        let statusForm = Object.entries(values).every(([prop, valor]) => {
            // every = todos os membros do array retornam true
            // high order function

            return validations[prop](valor) === '';
        })

        setErros({ ...erros });
        setValues({ ...values });
        setFormValid(statusForm);

    }

    return { erros, isFormValid, validate }
}