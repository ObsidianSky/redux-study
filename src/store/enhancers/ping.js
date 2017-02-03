export const ping = store => next => action => {
    console.log(store);
    console.log(next);
    console.dir(action);
    return next(action)
}