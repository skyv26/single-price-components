const devices = {
    ip5: '20em',
    galaxy: '22em',
    ipX: '23em',
    pixel: '25em',
    tablet: '48em',
    mylaptop: '85em',
    laptopL: '90em'
}


export const media = {
    ip5: `(min-width: ${devices.ip5})`,
    galaxy: `(min-width: ${devices.galaxy})`,
    ipX: `(min-width: ${devices.ipX})`,
    pixel: `(min-width: ${devices.pixel})`,
    mylaptop: `(min-width: ${devices.mylaptop})`,
    laptopL: `(min-width: ${devices.laptopL})`
}