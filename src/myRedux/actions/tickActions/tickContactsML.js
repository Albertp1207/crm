export const TICK_CONTACT = "ADD_TICK";
export const CLEAR_TICKS = "CLEAT_TICKS";
export const PUT_NAME = "PUT_NAME";

export const tickContact = id => ({
    type: TICK_CONTACT,
    payload:{id}
});
export const clearTicks = () => ({
    type: CLEAR_TICKS
});

export const putName = name => ({
    type:PUT_NAME,
    payload:{name}
})

