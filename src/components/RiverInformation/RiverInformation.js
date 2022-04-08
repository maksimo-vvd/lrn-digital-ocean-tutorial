import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import { getRiverInformation } from "../../services/rivers"

function RiverInformation({ name }) {
  const [riverInformation, setRiverInformation] = useState()

  useEffect(() => {
    let mounted = true
    getRiverInformation(name)
      .then(data => {
        if (mounted) {
          setRiverInformation(data)
        }
      })
    return () => {
      mounted = false
    }
  }, [name])

  return (
    <section>
      <h2>River Information</h2>

      <ul>
        <li>Continent: {riverInformation?.continent}</li>
        <li>Length: {riverInformation?.length}</li>
        <li>Outflow: {riverInformation?.outflow}</li>
      </ul>
    </section>
  )
}

RiverInformation.propTypes = {
  name: PropTypes.string.isRequired
}

export default RiverInformation
