import { Box, Button, CircularProgress, MenuItem, Select, Skeleton, Typography } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../redux/Hook"
import style from './Dashboard.module.css'
import { CaseTable } from "./caseTable/CaseTable"
import { useEffect, useState } from "react"
import { Chart } from "./chart/Chart"
import MapComponent from "./map/LocationMap"
import { fetchCovidData } from "../../redux/action/DashBoardAction"

export const Dashboard = () => {
    const { unofficialSummary, locationList, loading } = useAppSelector(state => state.dashboard)
    const [location, setLocation] = useState<string | null>(null)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchCovidData())
    }, [])
    return (
        <Box gap={3}>
            <Box display={'grid'} gridTemplateColumns={'1fr 1fr 1fr 1fr'} gap={2}>
                <Box p={2} className={style.caseCard} bgcolor={'#3279b5'} borderColor={'#0d6af6'}>
                    <Typography className={style.info}>Total Cases</Typography>
                    {loading ? <Skeleton width={'100px'} sx={{ p: '5px' }} /> : <Typography color="#fff">{new Intl.NumberFormat().format(unofficialSummary?.total!)}</Typography>}
                </Box>
                <Box p={2} className={style.caseCard} bgcolor={'#5cb85d'} borderColor={'#188351'}>
                    <Typography className={style.info}>Active Cases</Typography>
                    {loading ? <Skeleton width={'100px'} sx={{ p: '5px' }} /> : <Typography color="#fff">{new Intl.NumberFormat().format(unofficialSummary?.active!)}</Typography>}
                </Box>
                <Box p={2} className={style.caseCard} bgcolor={'#eead4e'} borderColor={'#f6bb06'}>
                    <Typography className={style.info}>Recovered Cases</Typography>
                    {loading ? <Skeleton width={'100px'} sx={{ p: '5px' }} /> : <Typography color="#fff">{new Intl.NumberFormat().format(unofficialSummary?.recovered!)}</Typography>}
                </Box>
                <Box p={2} className={style.caseCard} bgcolor={'#da524f'} borderColor={'#d53343'}>
                    <Typography className={style.info}>Deaths</Typography>
                    {loading ? <Skeleton width={'100px'} sx={{ p: '5px' }} /> : <Typography color="#fff">{new Intl.NumberFormat().format(unofficialSummary?.deaths!)}</Typography>}
                </Box>
            </Box>
            {loading ? <Box height={'100%'} className='flexCenterCenter'>
                <CircularProgress />
            </Box> : <>
                <Box my={5} display={'flex'} alignItems={'center'} justifyContent={'flex-end'}>
                    {location ? <Button onClick={() => setLocation(null)}>
                        <Typography sx={{ textDecoration: 'underline', textTransform: 'none' }}>Reset</Typography>
                    </Button> : null}
                    <Select value={location || 'select'} sx={{ width: '250px' }} size="small">
                        {!location ? <MenuItem value={'select'}>Select Location</MenuItem> : null}
                        {locationList.map((location, index) =>
                            <MenuItem key={`${location}${index}`} value={location} onClick={(e) => setLocation(location)}>{location}</MenuItem>
                        )}
                    </Select>

                </Box>
                <Box display={'grid'} gridTemplateColumns={'1fr 1fr'} height={'400px'} gap={2}>
                    <Box className={style.gridCard} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <Chart location={location} />
                    </Box>
                    <Box className={style.gridCard} overflow={'auto'}>
                        <CaseTable location={location} />
                    </Box>
                </Box>
                <Box bgcolor={'#fff'} borderRadius={'10px'} mt={10} mb={3} p={5}>
                    <MapComponent location={location} />
                </Box>
            </>}
        </Box>
    )
}