from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route("/Project3/Project_3/templates")
def index():
    return render_template('main.index.html')



if __name__ == '__main__':
    app.run(debug=True)