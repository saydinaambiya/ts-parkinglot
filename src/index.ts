const ParkingLot = async () => {
    const parkingRepository = ParkingRepository(3);
    const {
        createParkingLot,
        checkParkingLot,
        parking,
        leave
    } = ParkingService(parkingRepository);

    await createParkingLot();
    await parking(Car("BE001", "Alex"));
    await checkParkingLot();
    await parking(Car("B2021", "Blex"));
    await leave("B2021");
    await parking(Car("C012", "Clex"));
    await parking(Car("D0101", "Dlex"));
    await leave("B2019");
    await parking(Car("E0122", "Flex"));
    await parking(Car("E0122", "Flex"));
    await parking(Car("B2019", "Glex"));
    await parking(Car("BE001", "Alex"));
    await leave("B2021");
    await checkParkingLot();
    await leave("BE001");
    await checkParkingLot();
}


ParkingLot();