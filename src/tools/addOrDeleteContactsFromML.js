import myFetch from "./fetch"

export default (data,doAdd,ml) => {
    console.log(data)
    console.log(`/emaillists/update?id=${ml}&flag=${doAdd}`)
    return myFetch(`/emaillists/update?id=${ml}&flag=${doAdd}`,"PUT",data)
}