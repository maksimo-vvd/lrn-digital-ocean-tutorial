import React, {useEffect, useState} from "react"
import "./FileNamer.css"

function FileNamer () {
  const [name, setName] = useState('')
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    const handleWindowClick = () => setAlert(false)
    if (alert) {
      console.log('if')
      window.addEventListener('click', handleWindowClick)
    }
    // else {
    //   console.log('else')
    //   window.removeEventListener('click', handleWindowClick)
    // }

    return () => {
      console.log('run when componentUnmount')
      window.removeEventListener('click', handleWindowClick)
    }
  }, [alert, setAlert])

  const validate = event => {
    if (/\*/.test(name)) {
      event.preventDefault()
      setAlert(true)
      // return
    }
    // setAlert(false)
  }

  return (
    <div className="wrapper">
      <div className="preview">
        <h2>Preview: {name && <mark>{name}.js</mark>}</h2>
      </div>

      <form>
        <label>
          Name:
          &nbsp;
          <input
            autoComplete="off"
            name="name"
            // onBlur={() => setAlert(false)}
            // onFocus={() => setAlert(true)}
            onChange={event => setName(event.target.value)}
          />
        </label>

        <div className="information-wrapper">
          <button
            type="button"
            className="information"
            onClick={() => setAlert(true) }
          >
            more information
          </button>
          <hr/>

          { alert &&
            <div className="popup">
              <span role="img" aria-label="allowed">✅</span> Alphanumeric Characters
              <br />
              <span role="img" aria-label="not allowed">⛔️</span> *
            </div>
          }
        </div>

        <button onClick={ validate }>Save</button>
      </form>
    </div>
  )
}

export default FileNamer
