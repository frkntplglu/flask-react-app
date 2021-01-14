import psycopg2

# Connect to the Database
conn = psycopg2.connect(
    host = "localhost",
    database = "itusoruyor",
    user = "postgres",
    password = "gfb1907gfb", 
)
# Cursor
cur = conn.cursor()





# Close the connection
#conn.close()