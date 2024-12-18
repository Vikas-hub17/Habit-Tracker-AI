import random

def get_habit_recommendations():
    habits = [
        {"title": "Drink Water", "description": "Stay hydrated by drinking 8 glasses of water daily."},
        {"title": "Morning Stretch", "description": "Start your day with a 5-minute stretching session."},
        {"title": "Read a Book", "description": "Develop your mind by reading at least 20 pages daily."},
    ]
    return random.sample(habits, 3)
