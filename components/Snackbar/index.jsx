import React, { useState } from 'react'
import { Snackbar } from '@material-ui/core'
import { Alert as MuiAlert } from '@material-ui/lab'

const Alert = ({ message, severity = 'info', anchorOrigin, alwaysOpen }) => {
  const [open, setOpen] = useState(true)
  const position = { vertical: 'top', horizontal: 'right' }

  return (
    <Snackbar
      severity={severity}
      anchorOrigin={anchorOrigin ? anchorOrigin : position}
      autoHideDuration={4000}
      open={open}
      onClose={alwaysOpen ? null : () => setOpen(false)}
      key={'top' + 'right'}
    >
      <MuiAlert severity={severity} onClose={() => setOpen(false)}>
        {message}
      </MuiAlert>
    </Snackbar>
  )
}

export default Alert
