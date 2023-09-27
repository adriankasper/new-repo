import { Button } from "@mui/material"
import React, { useState } from "react"

const Maths = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>{count}</h2>
      <Button
        variant="contained"
        onClick={() => setCount(previousCount => previousCount + 1)}
        sx={{ marginBottom: 1 }}
      >
        Press me +1
      </Button>
      <Button
        variant="contained"
        onClick={() =>
          setTimeout(() => setCount(previousCount => previousCount + 10), 3000)
        }
      >
        Press me async +10
      </Button>
    </>
  )
}

export default Maths
