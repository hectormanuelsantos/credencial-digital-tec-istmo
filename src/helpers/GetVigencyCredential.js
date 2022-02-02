const date = new Date();
let month = date.getMonth();
let year = date.getFullYear();
let vigency;

(month >= 0 && month <= 6) ? vigency = `ENE - JUL ${year}` : vigency = `AGO - DIC ${year}`

export { vigency };
