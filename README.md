# external-apis

# Install packages
npm install

# Start project
npm start

# Get external data
curl --location --request GET 'http://localhost:9211/api/todos'

# Get external data by id
curl --location --request GET 'http://localhost:9211/api/todos/99'

# Post external data
curl --location --request POST 'http://localhost:9211/api/posts' \
--header 'Content-Type: application/json' \
--data-raw '{
    "userId": 0,
    "title": "NEW",
    "completed": false
}'
