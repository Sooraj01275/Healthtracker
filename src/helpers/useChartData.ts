import { useState, useEffect } from 'react';
import { useAppSelector } from '../redux/Hook';
import { RegionalData } from '../models/covidAPIResponse.model';

export const useCovidData = ({ location }: { location: string | null }) => {
    const [totals, setTotals] = useState([0, 0, 0]);
    const regional = useAppSelector(state => state.dashboard.covidData?.regional) || [];

    useEffect(() => {
        let data: RegionalData[] = [];
        if (location) {
            data = regional.filter(caseData => caseData.loc === location);
        } else {
            data = regional;
        }

        if (data.length > 0) {
            const calculatedTotals = data.reduce((acc, region) => {
                acc[0] += region.totalConfirmed; // totalConfirmed
                acc[1] += region.deaths;          // deaths
                acc[2] += region.discharged;      // discharged
                return acc;
            }, [0, 0, 0]);

            // Only update totals if they are different
            if (
                calculatedTotals[0] !== totals[0] ||
                calculatedTotals[1] !== totals[1] ||
                calculatedTotals[2] !== totals[2]
            ) {
                setTotals(calculatedTotals);
            }
        }
    }, [location, regional]); // Add 'regional' as a dependency

    return totals;
};
