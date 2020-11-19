import React, { useState, useContext } from 'react'
import { Radio, RadioGroup } from 'react-custom-radio-buttons'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Card from 'components/Card'

import { PizzaContext } from 'context/Pizza'
import { useStyles } from './styles'

import recheios from 'services/recheios'
import massa from 'services/massa'
import tamanho from 'services/tamanho'
import extra from 'services/extra'

function RecheiosRadio({ props }) {
  const classes = useStyles()
  const { recheio, setRecheio } = useContext(PizzaContext)

  const onChange = (option) => {
    setRecheio(option)
  }

  return (
    <div className={classes.Container}>
      <h1 className={classes.Title}>Selecione o recheio</h1>
      <RadioGroup containerStyle={classes.optionsContainer} onChange={onChange}>
        {props.map(({ img, title, recommended }, index) => (
          <Radio
            key={index}
            value={title}
            render={({ isSelected }) => (
              <Card
                img={img}
                title={title}
                recommended={recommended}
                selected={isSelected}
              >
                {title}
              </Card>
            )}
          />
        ))}
      </RadioGroup>
      <h1 className={classes.Subtitle}>Recheio selecionado: {recheio}</h1>
    </div>
  )
}

function MassaRadio({ props }) {
  const classes = useStyles()
  const { massa, setMassa } = useContext(PizzaContext)

  const onChange = (option) => {
    setMassa(option)
  }

  return (
    <div className={classes.Container}>
      <h1 className={classes.Title}>Selecione o recheio</h1>
      <RadioGroup containerStyle={classes.optionsContainer} onChange={onChange}>
        {props.map(({ img, title, recommended }, index) => (
          <Radio
            key={index}
            value={title}
            render={({ isSelected }) => (
              <Card
                img={img}
                title={title}
                recommended={recommended}
                selected={isSelected}
              >
                {title}
              </Card>
            )}
          />
        ))}
      </RadioGroup>
      <h1 className={classes.Subtitle}>Recheio selecionado: {massa}</h1>
    </div>
  )
}

function TamanhoRadio({ props }) {
  const classes = useStyles()
  const { tamanho, setTamanho } = useContext(PizzaContext)

  const onChange = (option) => {
    setTamanho(option)
  }

  return (
    <div className={classes.Container}>
      <h1 className={classes.Title}>Selecione o recheio</h1>
      <RadioGroup containerStyle={classes.optionsContainer} onChange={onChange}>
        {props.map(({ img, title, recommended }, index) => (
          <Radio
            key={index}
            value={title}
            render={({ isSelected }) => (
              <Card
                img={img}
                title={title}
                recommended={recommended}
                selected={isSelected}
              >
                {title}
              </Card>
            )}
          />
        ))}
      </RadioGroup>
      <h1 className={classes.Subtitle}>Recheio selecionado: {tamanho}</h1>
    </div>
  )
}

function ExtraRadio({ props }) {
  const classes = useStyles()
  const { extra, setExtra } = useContext(PizzaContext)

  const onChange = (option) => {
    setExtra(option)
  }

  return (
    <div className={classes.Container}>
      <h1 className={classes.Title}>Selecione o recheio</h1>
      <RadioGroup containerStyle={classes.optionsContainer} onChange={onChange}>
        {props.map(({ img, title, recommended }, index) => (
          <Radio
            key={index}
            value={title}
            render={({ isSelected }) => (
              <Card
                img={img}
                title={title}
                recommended={recommended}
                selected={isSelected}
              >
                {title}
              </Card>
            )}
          />
        ))}
      </RadioGroup>
      <h1 className={classes.Subtitle}>Recheio selecionado: {extra}</h1>
    </div>
  )
}

function getSteps() {
  return ['Recheio', 'Massa', 'Tamanho', 'Extra']
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <RecheiosRadio props={recheios} />
    case 1:
      return <MassaRadio props={massa} />
    case 2:
      return <TamanhoRadio props={tamanho} />
    case 3:
      return <ExtraRadio props={extra} />
    default:
      return 'unknown step'
  }
}

function Home() {
  const steps = getSteps()
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            Pedido finalizado
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div className={classes.Buttons}>
              <Button
                variant="contained"
                color="primary"
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
