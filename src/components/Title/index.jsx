import PropTypes from 'prop-types'
import { TitleStyled } from './styles'

export const Title = ({ text, isPurple }) => {
  return <TitleStyled $isPurple={isPurple}>{text}</TitleStyled>
}

Title.propTypes = {
  text: PropTypes.string,
  isPurple: PropTypes.bool,
}
