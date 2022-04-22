import { atom } from 'recoil'

export const searchTerm = atom({
    key: 'searchTerm',
    default: '',
})