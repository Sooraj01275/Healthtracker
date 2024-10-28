import { useAppSelector } from "../redux/Hook"

export const useCovidDataHelper = ({ location }: { location: string|null }) => {
    const regional = useAppSelector(state => state.dashboard.covidData?.regional) || []
    let activeData = []
    if (location) {
        activeData = regional.filter(caseData => caseData.loc === location)
    } else {
        activeData = regional
    }

    return activeData
}