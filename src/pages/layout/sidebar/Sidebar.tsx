import { Box, Button, Typography } from "@mui/material"
import style from './Sidebar.module.css'
import { useState } from "react"
import { Dashboard } from "@mui/icons-material"

export const Sidebar = () => {
    return (
        <Box className={style.sidebarContainer}>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} mt={5}>
                <Dashboard />
            </Box>
        </Box>
    )
}