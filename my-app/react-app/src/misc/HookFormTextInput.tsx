/* eslint-disable react/jsx-props-no-spreading */
import { TextField } from '@mui/material'
import React from 'react'
import { useController, UseControllerProps } from 'react-hook-form'

interface IProps extends UseControllerProps {
  label: string
  multiline?: boolean
  rows?: number
  type?: string
}

const HookFormTextInput = (props: IProps) => {
  const { fieldState, field } = useController({ ...props, defaultValue: '' })
  return (
    <TextField
      {...props}
      {...field}
      multiline={props.multiline}
      rows={props.rows}
      type={props.type}
      fullWidth
      variant="outlined"
      error={!!fieldState.error}
      helperText={fieldState.error?.message}
    />
  )
}

export default HookFormTextInput
