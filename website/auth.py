from flask import Blueprint,render_template,request,redirect,url_for,flash
from .models import User
from . import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, login_required, logout_user, current_user


auth = Blueprint('auth', __name__)

@auth.route('/',methods=['GET', 'POST'])
def login():
  if request.method == 'POST':
    email = request.form.get('email')
    password = request.form.get('password')
    
    user = User.query.filter_by(email=email).first()

    if user:
      if check_password_hash(user.password, password):
        login_user(user, remember=True)
        return redirect(url_for('views.empty'))
      else:
        flash('Incorrect Password', category='error')
    else:
      flash('No Account with This Email', category='error')

  return render_template('index.html')

@auth.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
      email = request.form.get('email')
      password = request.form.get('password')
      re_password = request.form.get('sec-password')

      user = User.query.filter_by(email=email).first()

      if user:
        flash('Email Already in Use',category='error')
      else:
        print('Account Created')
        new_user = User(email=email, password=generate_password_hash( password, method='sha256'))
        db.session.add(new_user)
        db.session.commit()
        return redirect('/')

    return render_template('pages/register.html')

