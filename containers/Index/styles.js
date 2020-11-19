import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles((theme) => ({
  Stepper: {
    padding: 0,
    marginBottom: theme.spacing(3),
  },
  Step: {
    color: theme.palette.green.light,
  },
  Container: {
    textAlign: 'center',
  },
  Title: {
    color: 'white',
    fontSize: 16,
    margin: theme.spacing(2, 0),
  },
  Subtitle: {
    color: 'white',
    fontSize: 16,
    margin: theme.spacing(2, 0),
  },
  option: {
    width: '100px',
    height: '100px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5px',
  },
  optionsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  Buttons: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(2, 0),
  },
}))
