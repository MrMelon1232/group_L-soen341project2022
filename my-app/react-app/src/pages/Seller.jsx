import {
  Input,
  Button,
  FormControl,
  TextField,
  InputLabel,
} from '@mui/material'
import React, { Component } from 'react'

const Seller = () => {
  const state = {
    selectedFile: null,
  }
  const fileSelectHandler = (event) => {
    console.log(event.target.files[0])
  }

  const fileUploadHandler = (event) => {
    console.log(event.target.files[0])
  }

  return (
    <div
      style={{
        padding: 20,
        justifyContent: 'center',
        margin: '0 auto',
        textAlign: 'center',
        width: '400px',
      }}
    >
      <FormControl>
        <legend> List Item</legend>
        <TextField
          required
          label="Enter Product Name"
          style={{
            width: '100%',
            margin: '10px auto',
          }}
        >
          <Input type="text" required>
            Product Name
          </Input>
        </TextField>
        <select
          label="Select Product Category"
          required
          style={{ margin: '8px 0' }}
        >
          <option>Clothing</option>
          <option>Cinema</option>
          <option>Kids</option>
          <option>Electronics</option>
          <option>Books</option>
          <option>Sports</option>
        </select>
        <InputLabel
          style={{
            width: '100%',
            margin: '70px -70px',
          }}
        >
          Select Product Category
        </InputLabel>
        <TextField
          id="outlined-multiline-static"
          label="Add a Small Description"
          multiline
          rows={4}
          style={{
            width: '100%',
            margin: '10px auto',
          }}
        >
          <Input type="text" required>
            Description
          </Input>
        </TextField>
        <TextField
          required
          label="Enter product price"
          type="number"
          style={{
            width: '100%',
            margin: '10px auto',
          }}
        >
          <Input type="number" required>
            Price
          </Input>
        </TextField>
        <Input type="file" required onChange={fileSelectHandler} />
        <Button onClick={fileUploadHandler}>Upload</Button>
        <Button type="submit"> Submit</Button>
      </FormControl>
    </div>
  )
}

export default Seller
