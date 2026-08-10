import axios from 'axios'
import React from 'react'

export const axiosInstance = axios.create({
    baseURL:"https://dummyjson.com"
})