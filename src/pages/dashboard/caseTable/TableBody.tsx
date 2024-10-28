import { Box, Typography } from "@mui/material";
import { RegionalData } from "../../../models/covidAPIResponse.model";

export const TableBody = ({ caseData }: { caseData: RegionalData }) => {
    return (
        <>
            <Box sx={{ border: '1px solid black', padding: '8px' }}>
                <Typography>{caseData.loc}</Typography>
            </Box>
            <Box sx={{ border: '1px solid black', padding: '8px' }}>
                <Typography>{caseData.totalConfirmed}</Typography>
            </Box>
            <Box sx={{ border: '1px solid black', padding: '8px' }}>
                <Typography>{caseData.discharged}</Typography>
            </Box>
            <Box sx={{ border: '1px solid black', padding: '8px' }}>
                <Typography>{caseData.deaths}</Typography>
            </Box>
        </>
    )

}