from flask import Flask, jsonify
from recommendation import get_habit_recommendations

app = Flask(__name__)

@app.route('/generate-habit-suggestions', methods=['GET'])
def generate_suggestions():
    suggestions = get_habit_recommendations()
    return jsonify(suggestions)

if __name__ == '__main__':
    app.run(port=5001)
