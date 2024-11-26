import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://szgyytinxbrwphdqtjrg.supabase.co/rest/v1',
    headers:{
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6Z3l5dGlueGJyd3BoZHF0anJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2MzIyMTcsImV4cCI6MjA0ODIwODIxN30.tMmmmJfxsVHMIn9E5SD8_RKHrSNZWzLb-WleUBzA-Ic",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6Z3l5dGlueGJyd3BoZHF0anJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2MzIyMTcsImV4cCI6MjA0ODIwODIxN30.tMmmmJfxsVHMIn9E5SD8_RKHrSNZWzLb-WleUBzA-Ic"
    }
})