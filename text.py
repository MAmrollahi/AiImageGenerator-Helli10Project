from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def welcome():
    return render_template("welcome(html).html")

@app.route('/account')
def account_page():  # Rename to avoid conflict
    return render_template("Account(html).html")

@app.route('/register')
def register():
    return render_template("register.html")

@app.route('/login')
def login():  # Assuming this is the intended function
    return render_template("login.html")

@app.route('/QRAi')
def qrcode():  # Renamed to follow Python naming conventions
    return render_template("Input_Output(html).html")

if __name__ == '__main__':  # Ensure this block is present
    app.run(debug=True)

