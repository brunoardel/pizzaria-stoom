import moment from 'moment'

const options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
}

export default {
  BRL: (date) => new Intl.DateTimeFormat('pt-BR', options).format(moment(date)),
  USD: (date) => new Intl.DateTimeFormat('en-US', options).format(moment(date)),
}
