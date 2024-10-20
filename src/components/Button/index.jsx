import PropTypes from 'prop-types'
import { GlobalButton } from './styles'

export const Button = ({ text, type, isLoading }) => {
  return (
    <GlobalButton type={type} $loading={isLoading}>
      {!isLoading && text}
    </GlobalButton>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  isLoading: PropTypes.bool,
}
