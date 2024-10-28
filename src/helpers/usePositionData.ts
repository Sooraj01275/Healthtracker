import { positions } from "../positionData"

export const usePositionData = ({ location }: { location: string | null }) => {
    const isnewLocation = positions.find(loc => loc.name === location)
    if (!location) {
        return positions
    } else if (location && !isnewLocation) {
        return positions
    } else {
        return positions.filter(dataLocation => dataLocation.name === location)
    }
}