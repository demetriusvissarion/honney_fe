from flask import Flask, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy
import sqlalchemy as sa

app = Flask(__name__)
# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///example.db"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///D:/WORK/zw_PERSONAL_PROJECTS/miere_fe/api/instance/example.db"
db = SQLAlchemy(app)

########################################################
# Create an SQLAlchemy engine using your connection URI
connection_uri = 'sqlite:///instance/example.db'
# connection_uri = 'sqlite:///example.db'
engine = sa.create_engine(connection_uri)
# Create a SQLAlchemy connection
connection = engine.connect()
# Specify the table name
table_name = 'todo'
# Build and execute a SELECT query
select_query = sa.text(f'SELECT * FROM {table_name}')
# Execute the query and fetch the results
result = connection.execute(select_query)
# Iterate through the result set and print the data
for row in result:
    print(row)
# Close the database connection
connection.close()
########################################################


class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)

    def __str__(self):
        return f'{self.id} {self.content}'


def todo_serializer(todo):
    return {
        'id': todo.id,
        'content': todo.content
    }


@app.route('/api', methods=['GET'])
def index():
    return jsonify([*map(todo_serializer, Todo.query.all())])


@app.route('/api/create', methods=['POST'])
def create():
    request_data = json.loads(request.data)
    todo = Todo(content=request_data['content'])

    db.session.add(todo)
    db.session.commit()
    return {'201': 'The "todo" was created successfully'}


@app.route('/api/<int:id>')
def show(id):
    return jsonify([*map(todo_serializer, Todo.query.filter_by(id=id))])


@app.route('/api/<int:id>', methods=['DELETE'])
def delete(id):
    request_data = json.loads(request.data)
    Todo.query.filter_by(id=request_data['id']).delete()
    db.session.commit()

    return {'204': 'Deleted successfully'}


@app.route('/api/<int:id>', methods=['PUT'])
def edit(id):
    request_data = request.json
    todo = Todo.query.get(id)
    if todo is None:
        return {'error': 'Todo not found'}, 404
    # Update the content of the todo item
    todo.content = request_data['content']
    db.session.commit()
    return {'message': 'Updated successfully'}


if __name__ == '__main__':
    app.run(debug=True)
