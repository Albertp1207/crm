import myFetch from "./fetch"

export default (data,doAdd,ml) => {
    return myFetch(`/emaillists/update?id=${ml}&flag=${doAdd}`,"PUT",data)
}