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

@application.route("/hello")
def hello():
    return "Hello World!"
# @application.route("/api/v1.0/Country Name")
# def names():
#     # Create our session (link) from Python to the DB
#     # session = Session(engine)
#     all=[]
#     con = sqlite3.connect("group2.db")
#     cur = con.cursor()

    
    # # Query all passengers
    # results = cur.execute("SELECT Country Name FROM group2.db").fetchall()
    
    # for i in results:
    #         names = {}
    #         print(i[0])
    #         names["Country Name"] = i[0]
    #         all.append(names)

    # # Convert list of tuples into normal list
    # # all_names = list(np.ravel(results))
    # con.close()
    # return jsonify(all)
@application.route("/api/v1.0/co2")
def co2():
    # Create our session (link) from Python to the DB
    # session = Session(engine)
    all=[]
    con = sqlite3.connect("Resources/project4db.db")
    cur = con.cursor()
    # """Return a list of passenger data including the name, age, and sex of each passenger"""
    # Query all passengers
    results = cur.execute('SELECT "Year","Country","CO2(MMtonnes)" FROM CO2new').fetchall()
    # results = session.query(Passenger.name, Passenger.age, Passenger.sex).all()
    print(results)
    # session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    all_co2 = []
    for year, country, tonnes in results:
        
        dict_co2 = {}
        dict_co2["Year"] = year
        dict_co2["Country"] = country
        dict_co2["CO2(MMtonnes)"] = tonnes
        

        all_co2.append(dict_co2)

    return jsonify(all_co2)
# Code,Year,Electricity from coal (TWh),Electricity from gas (TWh),Electricity from hydro (TWh),Electricity from other renewables (TWh),Electricity from solar (TWh),Electricity from oil (TWh),Electricity from wind (TWh),Electricity from nuclear (TWh) FROM project.db.sql").fetchall()
# @application.route("/api/v1.0/electricity")
# def electricity():
#     # Create our session (link) from Python to the DB
#     # session = Session(engine)
#     con = sqlite3.connect("group2.db")
#     cur = con.cursor()
#     results2 = cur.execute('SELECT CountryName, Code,Year,"Electricityfromcoal(TWh)","Electricityfromgas(TWh)","Electricityfromhydro(TWh)","Electricityfromotherrenewables(TWh)","Electricityfromsolar(TWh)","Electricityfromoil(TWh)","Electricityfromwind(TWh)","Electricityfromnuclear(TWh)" FROM electricity_filtered').fetchall()

        
#     all_electricity = []
#     for cname, code,year,coal,gas , hydro , other ,solar , oil , wind ,nuclear in results2:
#         dict_electricity ={}
#         dict_electricity["CountryName"] = cname
#         dict_electricity["Code"] = code
#         dict_electricity["Year"] = year
#         dict_electricity["Electricityfromcoal(TWh)"]=coal
#         dict_electricity["Electricityfromgas(TWh)"]=gas
#         dict_electricity["Electricityfromhydro(TWh)"]=hydro
#         dict_electricity["Electricityfromotherrenewables(TWh)"]=other
#         dict_electricity["Electricityfromsolar(TWh)"]=solar
#         dict_electricity["Electricityfromoil(TWh)"]=oil
#         dict_electricity["Electricityfromwind(TWh)"]=wind
#         dict_electricity["Electricityfromnuclear(TWh)"]=nuclear

#         all_electricity.append(dict_electricity)

#     return jsonify(all_electricity)


if __name__ == "__main__":
    application.run(port=5000, debug=True)