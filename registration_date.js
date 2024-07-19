const dataPoints = [
    { id: 1, date: new Date(2015, 9, 2) },
    { id: 173870712, date: new Date(2016, 3, 13) },
    { id: 250129497, date: new Date(2017, 5, 3) },
    { id: 401921266, date: new Date(2017, 6, 25) },
    { id: 591702848, date: new Date(2018, 3, 23) },
    { id: 762061130, date: new Date(2019, 6, 27) },
    { id: 989903622, date: new Date(2019, 11, 4) },
    { id: 1000179995, date: new Date(2019, 10, 26) },
    { id: 1100398719, date: new Date(2020, 6, 9) },
    { id: 1338788422, date: new Date(2020, 7, 21) },
    { id: 1366123599, date: new Date(2020, 9, 26) },
    { id: 1400550238, date: new Date(2020, 10, 19) },
    { id: 1500045869, date: new Date(2021, 0, 13) },
    { id: 1600315778, date: new Date(2021, 3, 15) },
    { id: 1700263108, date: new Date(2021, 3, 18) },
    { id: 1809955302, date: new Date(2021, 6, 27) },
    { id: 1904824687, date: new Date(2021, 7, 29) },
    { id: 2004732748, date: new Date(2021, 8, 24) },
    { id: 2115988529, date: new Date(2021, 10, 26) },
    { id: 5004488410, date: new Date(2021, 11, 17) },
    { id: 5367866773, date: new Date(2022, 3, 11) },
    { id: 6040289492, date: new Date(2023, 4, 29) },
    { id: 7275317003, date: new Date(2024, 5, 5) }
];

function calculateAge(estimatedDate) {
    const ageInDays = (new Date() - estimatedDate) / (1000 * 60 * 60 * 24);
    const ageInYears = ageInDays / 365.25;
    console.log(ageInYears);
    roundAge = Math.round(ageInYears);
    if (roundAge < 1) {
        return 1;
    }
    return roundAge;
}

function estimateRegistrationDate(userId, dataPoints) {
    dataPoints.sort((a, b) => a.id - b.id);

    for (let i = 0; i < dataPoints.length - 1; i++) {
        const { id: id1, date: date1 } = dataPoints[i];
        const { id: id2, date: date2 } = dataPoints[i + 1];

        if (id1 <= userId && userId <= id2) {
            const daysBetween = (date2 - date1) / (1000 * 60 * 60 * 24);
            const idsBetween = id2 - id1;
            const growthRate = idsBetween / daysBetween;

            const daysSinceId1 = (userId - id1) / growthRate;
            const estimatedDate = new Date(date1.getTime() + daysSinceId1 * 24 * 60 * 60 * 1000);
            return estimatedDate;
        }
    }
    console.log('User ID not found in data points');
    const { id: idLast, date: dateLast } = dataPoints[dataPoints.length - 1];
    const { id: idSecondLast, date: dateSecondLast } = dataPoints[dataPoints.length - 2];
    const daysBetween = (dateLast - dateSecondLast) / (1000 * 60 * 60 * 24);
    const idsBetween = idLast - idSecondLast;
    const growthRate = idsBetween / daysBetween;

    const daysSinceLast = (userId - idLast) / growthRate;
    const estimatedDate = new Date(dateLast.getTime() + daysSinceLast * 24 * 60 * 60 * 1000);
    return estimatedDate;
}

const userIdToEstimate = 8275317003;
const estimatedDate = estimateRegistrationDate(userIdToEstimate, dataPoints);
const ageInYears = calculateAge(estimatedDate);

console.log(`Estimated registration date for user ID ${userIdToEstimate}: ${estimatedDate.toISOString().split('T')[0]}`);
console.log(`Estimated age of user ID ${userIdToEstimate}: ${ageInYears} years`);
