export const GUARDAR_TIPO_MENU = "[vianda] GUARDAR_TIPO_MENU"
export const GUARDAR_MENU = "[vianda] GUARDAR_MENU"

export const guardarTipoMenu = (tipoMenu) => ({
    type: GUARDAR_TIPO_MENU,
    tipoMenu: tipoMenu
})

export const guardarMenu = (menu) => ({
    type: GUARDAR_MENU,
    menu: menu
})

