import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../../redux/Hook";
import { TableBody } from "./TableBody";
import { useCovidDataHelper } from "../../../helpers/useCovidDataHelper";

export const CaseTable = ({ location }: { location: string | null }) => {
    const filteredCovidData = useCovidDataHelper({ location });

    return (
        <Box display="grid" gridTemplateColumns="repeat(4, 1fr)">
            <Box sx={{ border: '1px solid black', padding: '8px' }}>
                <Typography fontWeight={600}>State</Typography>
            </Box>
            <Box sx={{ border: '1px solid black', padding: '8px' }}>
                <Typography fontWeight={600}>Total Case</Typography>
            </Box>
            <Box sx={{ border: '1px solid black', padding: '8px' }}>
                <Typography fontWeight={600}>Recovered Case</Typography>
            </Box>
            <Box sx={{ border: '1px solid black', padding: '8px' }}>
                <Typography fontWeight={600}>Death</Typography>
            </Box>
            {filteredCovidData.map((caseData, index) => (
                <TableBody caseData={caseData} key={`${index}caseData`} />
            ))}
        </Box>
    );
};
