import { Box, Link, List, ListItem, Paper, Typography } from "@mui/material"
import MenuAppBar from "../appbar"
import { DashboardStyle, SectionStyle } from "./dashboard.style"

const Dashboard = () => {

    return (
        <Box>

            <MenuAppBar />

            <Box sx={DashboardStyle}>
                <Paper sx={SectionStyle}>
                    <Typography variant="h5" component="h2">
                        JavaScript resources
                    </Typography>

                    <List>
                        <ListItem>


                            <Link href="https://javascript.info/" target="_blank" rel="noopener noreferrer"> JavaScript Info </Link>

                        </ListItem>
                        <ListItem>
                            <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"> MDN JavaScript </Link>
                        </ListItem>

                        <ListItem>

                            <Link href="https://docs.google.com/document/d/1eD4bm6i4hl5vmxuN0js8goP2aCODaZunS8zeHuoHo50/edit" target="_blank" rel="noopener noreferrer"> Topics sheet </Link>
                        </ListItem>
                    </List>
                </Paper>

                <Paper sx={SectionStyle}>
                    <Typography variant="h5" component="h2">
                        React resources
                    </Typography>

                    <List>
                        <ListItem>
                            <Link href="https://react.dev/" target="_blank" rel="noopener noreferrer"> React Docs </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://docs.google.com/document/d/1dBXiTaROxRO6AAHc1XBR0AZRCbScUFQZHuLuR8Jd1rQ/edit" target="_blank" rel="noopener noreferrer"> React Topics sheet </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://legacy.reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer"> Legacy react docs </Link>
                        </ListItem>
                    </List>
                </Paper>

                <Paper sx={SectionStyle}>
                    <Typography variant="h5" component="h2">
                        NodeJS resources
                    </Typography>

                    <List>
                        <ListItem>
                            <Link href="https://github.com/learning-zone/nodejs-basics" target="_blank" rel="noopener noreferrer"> NodeJS Interview questions </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://expressjs.com/en/5x/api.html" target="_blank" rel="noopener noreferrer"> Express JS </Link>
                        </ListItem>
                    </List>
                </Paper>
            </Box>
        </Box>
    )

}

export default Dashboard