from flask import Flask, render_template


app = Flask(__name__)
app.config['SECRET_KEY']='42937a7f46c9fb5ac8c41e9c90dfc3b2'

@app.route("/")
def main():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)
	
# @app.route("/register")
# def register():
# 	form=RegistrationForm()
# 	return render_template('register.html',title='Register',form=form)

# @app.route("login")
# def Login():
# 	form=LoginForm()
# 	return render_template('login.html',title='Login',form=form)