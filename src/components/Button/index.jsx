import PropTypes from 'prop-types'
import { GlobalButton } from './styles'

export const Button = ({ text, type, isLoading, children, click  }) => {
  return (
    <GlobalButton type={type} $loading={isLoading} onClick={click}>
      {!isLoading && text || children}
    </GlobalButton>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  click: PropTypes.func,
  children: PropTypes.node
}
