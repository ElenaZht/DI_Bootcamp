import psycopg2

# Function to connect to the database
def connect_to_db():
    try:
        conn = psycopg2.connect(
            dbname="countries_api",  # your DB name
            user="postgres",      # your username
            password="lena_postgres",  # your password
            host="localhost"      # your host (localhost for local machine)
        )
        print("Connection successful")
        return conn
    except Exception as e:
        print(f"Error: {e}")
        return None

# Function to close the connection
def close_connection(conn):
    if conn:
        conn.close()
        print("Connection closed.")


# Main logic to run the script
def run_script():
    conn = connect_to_db()
    if conn:
        close_connection(conn)