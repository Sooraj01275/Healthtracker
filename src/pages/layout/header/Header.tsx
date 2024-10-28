import { Box, AppBar, Container, Toolbar, IconButton, Typography, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material"
import './Header.css'
import { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp, Logout, Person } from "@mui/icons-material";

export const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    return (
        <Box className='header-container' bgcolor={'#232323'}>
            <AppBar position="static" elevation={0} className="appBarTransparent appBarHeader">
                <Container maxWidth={false}>
                    <Box>
                        <Toolbar>
                            <Box display="flex" alignItems="center" justifyContent="space-between" width={1}  >
                                <Box display="flex" alignItems="center">
                                    <Typography fontWeight={600} >Dashboard</Typography>
                                </Box>
                                <Box display="flex" alignItems="center" sx={{ gap: "8px" }}>
                                    <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                                        <Person color="secondary" />
                                        {!!anchorEl ? <KeyboardArrowUp color="secondary"/> : <KeyboardArrowDown color="secondary" />}
                                    </IconButton>
                                </Box>
                            </Box>
                        </Toolbar>
                    </Box>
                </Container>
            </AppBar>
            <Menu open={!!anchorEl} onClose={() => setAnchorEl(null)} anchorEl={anchorEl}>
            <MenuItem>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                    Logout
                </ListItemText>
            </MenuItem>
            </Menu>
        </Box>
    )
}