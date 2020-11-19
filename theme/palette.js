import { colors } from '@material-ui/core'

const white = '#FFFFFF'
const black = '#000000'

export default {
  black,
  white,
  green: {
    dark: '#29402B',
    light: '#ADBEAE',
  },
  primary: {
    contrastText: black,
    dark: '#c3dd08',
    main: '#def72d',
    light: '#ecfa84',
  },
  secondary: {
    contrastText: black,
    dark: '#ff6420',
    main: '#ff8200',
    light: '#ff8e5d',
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[100],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[100],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[100],
  },
  disabled: {
    contrastText: white,
    dark: colors.grey[900],
    main: colors.grey[600],
    light: colors.grey[100],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[100],
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600],
  },
  background: {
    default: '#29402B',
    light: '#D9DFD9',
    paper: white,
    table: '#fafafa',
  },
  grey: {
    contrastText: white,
    dark: colors.grey[900],
    main: colors.grey[600],
    light: colors.grey[100],
  },
  orange: {
    main: '#FF8200',
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200],
}
