import turtle
import random
import psycopg2
import time

DB_CONFIG = {
    "dbname": "session_28",
    "user": "kira_turtle2",
    "password": "kirayaa",
    "host": "localhost",
    "port": "5432"
}
SCREEN_WIDTH = 500
SCREEN_HEIGHT = 500
GAME_DURATION = 25
score = 0 
time_left = GAME_DURATION

def get_high_score_from_db():
    """Connects to the DB and retr"""
