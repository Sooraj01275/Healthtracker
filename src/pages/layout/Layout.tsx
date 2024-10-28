import { Box } from "@mui/material"
import { useEffect } from "react"
import { useAppDispatch } from "../../redux/Hook"
import { useNavigate } from "react-router"
import { Header } from "./header/Header"
import { Sidebar } from "./sidebar/Sidebar"
import { Dashboard } from "../dashboard/Dashboard"

export const Layout = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    return (
            <Box>
                <Sidebar />
                <div>
                    <Header />
                    <div className='component-container'>
                        <Dashboard />
                    </div>
                </div>
            </Box>
    )
}