# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) SMS Queue Management System

Lets create a system that interfaces using SMS instead of HTML.
Queue system are heavily used in Goverment institutions, airports, banks and many other venues looking to organize the incoming traffic.
Queue systems can also be used to load balancing for different applications like:
- Stablishing priorities in web servers incoming requests.
- Inmigration and visa applicantions that need to be prioritized.
- Network packages.
- etc.

## 📝 Instructions

Create a cloud based queue system that can be uses with SMS:

1. Bob is looking a spot in the line so it sends an SMS to the number `+1 777 777 7777`
2. Twillio any endpoint of your API that you specify, on the request body you will be able to read the message that Bob send.
3. The API receives the request and adds Bob into the queue with any particular priority (FIFO or LIFO).
3. The API now runs the script to respond with an SMS to Bob with confirmation and how many people are in front of him on the line.
4. The system now waits until the enpoint `GET /next_in_line` gets executed to process the queue.
5. The system lets bob know that his turn has arrived and deletes him from the list.

## More details

1. You have to create 3 endpoints for your API:

POST /new_in_line: Will recive information about a user and ad him into the queue.
GET /next_in_line: Will process one spot of the queue.
GET /all: Will return a list with everyone that is pending to be processed (the current queue)

## 📖 Fundamentals

This exercise will make you practice the following fundamentals:

1. Reading API documentations
2. Integration to Twillio api
3. WebHooks.
4. Building an RESTful API
5. Complex Data Structures
6. Queue (FIFO vs FILO)
7. SMS
8. Logging.