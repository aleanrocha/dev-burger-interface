import PropTypes from 'prop-types'
import { GlobalButton } from './styles'

export const Button = ({ text, type }) => {
  return <GlobalButton type={type}>{text}</GlobalButton>
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
}
