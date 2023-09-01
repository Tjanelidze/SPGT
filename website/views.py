from flask import Blueprint, render_template
from flask_login import login_required, current_user

views = Blueprint('views', __name__)

@views.route('/empty')
@login_required
def empty():
  return render_template('pages/empty.html')

@views.route('/profile')
@login_required
def profile():
  return render_template('pages/details.html')

@views.route('/preview')
@login_required
def preview():
  return render_template('pages/preview.html')
