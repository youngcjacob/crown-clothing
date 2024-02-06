import {FormInputLabel} from './form-input.styles.jsx';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <FormInputLabel>
      <input className='form-input' {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </FormInputLabel>
  );
};

export default FormInput;
