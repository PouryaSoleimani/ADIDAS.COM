import { atom } from "recoil"
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

//^ REGISTER AND LOGIN ATOMS ======================================================================
export const isLoggedin = atom({ key: 'isLoggedin', default: false })
export const token = atom({ key: 'token', default: null })
export const userInfos = atom({ key: 'userInfos', default: {} })

// * PRODUCT ATOMS ================================================================================
export const allProducts_atom = atom({ key: 'allProducts', default: [] })

//? SHOPPING CART =================================================================================
export const shoppingBag = atom({ key: 'shoppingBag', default: [], effects_UNSTABLE: [persistAtom] })
//! WISHLIST ======================================================================================
export const wishList = atom({ key: 'wishList', default: [], effects_UNSTABLE: [persistAtom] })