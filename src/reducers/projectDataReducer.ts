import { FETCHED_ALL_PROJECT_DATA } from "../actions/types"

export interface projectDataT {
  title: string
  description: string
  gitRepo: {
    frontend: string
    server: string
  }
  relevant: {
    webApp: string
  }
  status: number
  technologies: [] 
  type: string
  _id: number 
  images: {
    [index: number]: string
  }
}
const initialState = []

export default (state: projectDataT[] = initialState, { type, payload }) => {
  switch (type) {

    case FETCHED_ALL_PROJECT_DATA:
      return payload

    default:
      return state
  }
}
