/* eslint-disable react/jsx-props-no-spreading */
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import React from 'react'
import { useController, UseControllerProps } from 'react-hook-form'

interface IProps extends UseControllerProps {
  label: string
  disabled: boolean
}

const HookFormButton = (props: IProps) => {
  const { field } = useController({ ...props, defaultValue: false })
  return (
    <FormControlLabel
      control={<Button {...field} disabled={field.value} color="secondary" />}
      label={props.label}
      disabled={props.disabled}
    />
  )
}

export default HookFormButton
