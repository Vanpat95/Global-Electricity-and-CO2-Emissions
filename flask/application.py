from flask import Flask,jsonify,render_template
# from flask_cors import CORS
import sqlite3
con = sqlite3.connect("group2.db")
cur = con.cursor()
application = Flask(__name__)

# CORS(application)
@application.route("/")
def index():
    return render_template("index.html")



@application.route("/api/v1.0/co2")
def co2():
    # Create our session (link) from Python to the DB
    # session = Session(engine)
    all=[]
    con = sqlite3.connect("project4db.db")
    cur = con.cursor()
    # """Return a list of passenger data including the name, age, and sex of each passenger"""
    # Query all passengers
    results = cur.execute('SELECT "Year","Country","CO2(MMtonnes)","Latitude","Longitude" FROM CO2new').fetchall()
    # results = session.query(Passenger.name, Passenger.age, Passenger.sex).all()
    print(results)
    # session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    all_co2 = []
    for year, country, tonnes, lat, long in results:
        
        dict_co2 = {}
        dict_co2["Year"] = year
        dict_co2["Country"] = country
        dict_co2["CO2(MMtonnes)"] = tonnes
        dict_co2["Latitude"] = lat
        dict_co2["Longitude"] = long
        

        all_co2.append(dict_co2)

    return jsonify(all_co2)
@application.route("/api/v1.0/electricity")
def electricity():
    # Create our session (link) from Python to the DB
    # session = Session(engine)
    con = sqlite3.connect("project4db.db")
    cur = con.cursor()
    results2 = cur.execute('SELECT "Year", "Country", "Coal","Natural_gas","Petroleum","Nuclear_renewables_and_other","Latitude","Longitude" FROM Electricitynew').fetchall()

        
    all_electricity = []
    for yr, cntry, coal, gas, petrol, nuclear, latitude, lng in results2:
        dict_electricity ={}
        dict_electricity["Year"] = yr
        dict_electricity["Country"] = cntry
        dict_electricity["Coal"] = coal
        dict_electricity["Natural_gas"]=gas
        dict_electricity["Petroleum"]=petrol
        dict_electricity["Nuclear_renewables_and_other"]=nuclear
        dict_electricity["Latitude"]=latitude
        dict_electricity["Longitude"]=lng
       

        all_electricity.append(dict_electricity)

    return jsonify(all_electricity)


if __name__ == "__main__":
    application.run(port=5000, debug=True)

