import React from 'react'
import { useState } from 'react'


/*
Deliverable Three

When the button that says `Open Duck Form` is clicked, it will toggle whether the DuckForm is displayed or not. Use best practices with conditional rendering to show it. Additionally, the button should either read `Open Duck Form` or `Close Duck Form` depending on whether the form is already opened or closed.*/

function DuckForm(props) {
  
  return (
    <form id="new-duck-form">
       <label for="duck-name-input">New Duck Name:</label>
       <input type="text" name="duck-name-input" />

       <label for="duck-image-input">New Duck Image URL:</label>
       <input type="text" name="duck-image-input" />

       <input type="submit" value="Create Duck" />
    </form>
  )
}

export default DuckForm
