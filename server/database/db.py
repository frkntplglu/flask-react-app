import psycopg2
import psycopg2.extras
# Connect to your postgres DB
conn = psycopg2.connect("dbname=database_course user=postgres password=gfb1907gfb")

# # Open a cursor to perform database operations
cursor = conn.cursor(cursor_factory = psycopg2.extras.RealDictCursor)

