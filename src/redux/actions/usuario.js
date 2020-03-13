export const GET = "[usuario] Fetch"
export const FETCH_SUCCESS = "[usuario] fetch success"
export const FETCH_ERROR = "[usuario] fetch error"
export const CLEAN = "[usuario] Clean"

export const get = (options) => ({
    type: GET,
    options: options
});
export const clean = () => ({
    type: CLEAN
});