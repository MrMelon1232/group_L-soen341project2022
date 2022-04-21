/* eslint-disable react/no-unescaped-entities */

/* eslint-disable react/jsx-props-no-spreading */
import { UploadFile } from '@mui/icons-material'
import { FormControl, FormHelperText, Typography } from '@mui/material'
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useController, UseControllerProps } from 'react-hook-form'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps extends UseControllerProps {}

const Dropzone = (props: IProps) => {
  const { fieldState, field } = useController({ ...props, defaultValue: null })

  const dzStyles = {
    display: 'flex',
    border: 'dashed 3px #eee',
    borderColor: '#eee',
    borderRadius: '5px',
    paddingTop: '30px',
    alignItems: 'center',
    height: 200,
    width: 500,
  }

  const dzActive = {
    borderColor: 'black',
  }

  const onDrop = React.useCallback(
    (acceptedFiles) => {
      // eslint-disable-next-line no-param-reassign
      acceptedFiles[0] = Object.assign(acceptedFiles[0], {
        preview: URL.createObjectURL(acceptedFiles[0]),
      })
      field.onChange(acceptedFiles[0])
    },
    [field]
  )
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <FormControl
        style={isDragActive ? { ...dzStyles, ...dzActive } : dzActive}
      >
        <input {...getInputProps()} />
        <UploadFile sx={{ fontSize: '100px' }} />
        <Typography variant="h4">Drop image here</Typography>
        <FormHelperText>{fieldState.error?.message}</FormHelperText>
      </FormControl>
    </div>
  )
}

export default Dropzone
