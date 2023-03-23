interface ICar {
    plateNumber: string;
    carOwner?: string;
}

const Car = (plateNumber: string, carOwner: string): ICar => ({ plateNumber, carOwner })

module.exports = { Car }