import axiosPackage from 'axios'

export const axios = axiosPackage.create({
  baseURL: 'http://localhost:5173',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})
