from datetime import datetime, timedelta

# Known data points
data_points = [
    (173870712, datetime(2016, 4, 13)),
    (250129497, datetime(2017, 6, 3)),
    (401921266, datetime(2017, 7, 25)),
    (591702848, datetime(2018, 4, 23)),
    (762061130, datetime(2019, 7, 27)),
    (989903622, datetime(2019, 12, 4)),
    (1000179995, datetime(2019, 11, 26)),
    (1100398719, datetime(2020, 7, 9)),
    (1338788422, datetime(2020, 8, 21)),
    (1366123599, datetime(2020, 10, 26)),
    (1400550238, datetime(2020,11,19)),
    (1500045869, datetime(2021, 1,13)),
    (1600315778, datetime(2021, 4, 15)),
    (1700263108, datetime(2021, 4, 18)),
    (1809955302, datetime(2021, 7, 27)),
    (1904824687, datetime(2021, 8, 29)),
    (2004732748, datetime(2021, 9, 24)),
    (2115988529, datetime(2021, 11, 26)),
    (5004488410, datetime(2021, 12, 17)),
    (5367866773, datetime(2022, 4, 11)),
    (6040289492, datetime(2023, 5, 29)),
    (7275317003, datetime(2024, 6, 5))
]
def calculate_age(estimated_date):
    age_in_days = (datetime.now() - estimated_date).days
    age_in_years = age_in_days / 365.25  # Approximate year length accounting for leap years
    return age_in_years

def estimate_registration_date(user_id, data_points):
    # Sort data points by user_id
    data_points.sort()
    
    # Find the closest data points
    for i in range(len(data_points) - 1):
        id1, date1 = data_points[i]
        id2, date2 = data_points[i + 1]
        
        if id1 <= user_id <= id2:
            # Calculate the growth rate between these points
            days_between = (date2 - date1).days
            ids_between = id2 - id1
            growth_rate = ids_between / days_between
            
            # Estimate the date
            days_since_id1 = (user_id - id1) / growth_rate
            estimated_date = date1 + timedelta(days=days_since_id1)
            return estimated_date

    # If the user_id is beyond the last known data point
    id_last, date_last = data_points[-1]
    growth_rate = (data_points[-1][0] - data_points[-2][0]) / (data_points[-1][1] - data_points[-2][1]).days
    days_since_last = (user_id - id_last) / growth_rate
    estimated_date = date_last + timedelta(days=days_since_last)
    return estimated_date

# User ID to estimate
user_id_to_estimate = 5800091112

# Estimate registration date
estimated_date = estimate_registration_date(user_id_to_estimate, data_points)
print(f"Estimated registration date for user ID {user_id_to_estimate}: {estimated_date.strftime('%Y-%m-%d')}")
print("age", calculate_age(estimated_date))
