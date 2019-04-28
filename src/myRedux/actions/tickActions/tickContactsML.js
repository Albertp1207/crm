export const TICK_CONTACT = "ADD_TICK";
export const CLEAR_TICKS = "CLEAR_TICKS";
export const PUT_ID = "PUT_ID";

export const tickContact = id => ({
    type: TICK_CONTACT,
    payload:{id}
});
export const clearTicks = () => ({
    type: CLEAR_TICKS
});

export const putID = name => ({
    type:PUT_ID,
    payload:{name}
})

