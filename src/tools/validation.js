const regExp = {
    fullName: /^[a-z ]+$/i,
    companyName: /^[a-z ]+\w*$/i,
    position: /^[a-z ]+$/i,
    country: /^[a-z ]+$/i,
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
    emailListName: /^[a-z]+[\s\w]*$/i
}

const validation = (el) => {
    const name = el.target.getAttribute('name');
    const value = el.target.value;
    if (regExp[name].test(value)) {
        return true;
    } else {
        return false;
    }
}

export default validation;