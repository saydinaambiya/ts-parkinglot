const ParkingLot = async () => {
    const parkingRepository = ParkingRepository(3);
    const {
        createParkingLot,
        checkParkingLot,
        parking,
        leave
    } = ParkingService(parkingRepository);
}

ParkingLot();