import PropTypes from 'prop-types'
import { FormControlWrapper } from './styles'

export const FormControl = (props) => {
  return (
    <FormControlWrapper $inputError={props.inputError}>
      <label htmlFor={props.idFor}>{props.labelInfo}</label>
      <input
        type={props.inputType}
        id={props.idFor}
        placeholder={props.placeholder}
        {...props.register(`${props.idFor}`)}
      />
      <span>{props.inputError}</span>
    </FormControlWrapper>
  )
}

FormControl.propTypes = {
  inputError: PropTypes.node,
  labelInfo: PropTypes.string,
  inputType: PropTypes.string,
  idFor: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func
}
