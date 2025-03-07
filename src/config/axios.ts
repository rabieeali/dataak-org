import axiosPackage from 'axios'

export const axios = axiosPackage.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})
