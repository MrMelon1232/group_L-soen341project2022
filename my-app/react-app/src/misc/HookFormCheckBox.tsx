/* eslint-disable react/jsx-props-no-spreading */
import { Checkbox, FormControlLabel, TextField } from '@mui/material'
import React from 'react'
import { useController, UseControllerProps } from 'react-hook-form'

interface IProps extends UseControllerProps {
  label: string
  disabled: boolean
}

const HookFormCheckBox = (props: IProps) => {
  const { field } = useController({ ...props, defaultValue: false })
  return (
    <FormControlLabel
      control={<Checkbox {...field} checked={field.value} color="secondary" />}
      label={props.label}
      disabled={props.disabled}
    />
  )
}

export default HookFormCheckBox
