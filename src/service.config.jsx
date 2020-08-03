const serviceConfig = {
  domain: "https://casoscovidcrbe.herokuapp.com/",
  endpoints: [
    "get-data-set-sesion",
    "get-last-date-updated"
  ]
}

const runApiServer = (endpointId, methodApi) =>
  new Promise((resolve, reject) => {
    const { domain, endpoints } = serviceConfig

    fetch(`${domain}${endpoints[endpointId]}`, { method: methodApi })
    .then(res => res.json())
    .then(
      (response) => resolve({ auth: true, response: response.result }),
      () => reject({ auth: false })
    )
  })

export default runApiServer