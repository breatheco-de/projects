# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) SMS Queue Management System

Lets create a system that interfaces with SMS instead of a class HTML fron-end.
Queue system are heavily used in Goverment institutions, airports, banks and many other venues looking to organize the incoming traffic.
Queue systems can also be used to load balancing for different applications like:
- Stablishing priorities in web servers incoming requests.
- Inmigration and visa applicantions that need to be prioritized.
- Network packages.
- etc.

## 📝 Instructions

Create a cloud based queue system that can be uses with SMS:
1. Bob is looking a spot in the line so it sends an SMS to the number `+1 777 777 7777`
2. The system receives the petition and adds Bobg into the queue with any particular priority (FIFO or LIFO).
3. The system respons an SMS to bob with confirmation and how many people are in front of him on the line.
4. The system keeps procesing the queue until its Bob's turn.
5. The system lets bob know that his turn has arrived and deletes him from the list.

@TODO: Add a more detailed explanation on what to do.

## 📖 Fundamentals

This exercise will make you practice the following fundamentals:

1. Reading API documentations
2. Building an RESTful API
3. Complex Data Structures
4. Queue (FIFO vs FILO)
5. SMS
6. Logging.