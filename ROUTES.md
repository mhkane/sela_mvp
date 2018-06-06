### Sela Backend REST API
Sela includes a REST API in the backend that performs business-critical operations on behalf of the client. The following is an outline of the REST API\*:

- **Register**
  - Route: /register
  - Method: POST
  - Parameters:
    - *firstName*: user's first name
    - *familyName*: user's family name
    - *username*: user's username
    - *publicKey*: user's public key
    - *password*: user's password
  - Response: ----------------

- **Login**
  - Route: /login
  - Method: POST
  - Parameters:
    - *username*: user's username
    - *password*: user's password
  - Response: ----------------

- **PostProject**
  - Route: /project
  - Method: POST
  - Parameters:
    - *name*: name of project
    - *description*: description of project
    - *startNate*: start date of project
    - *endDate*: end date of project
    - *authToken*: token authenticating user in system
  - Response: ----------------

- **GetProjects**
  - Route: /projects
  - Method: GET
  - Parameters:
    - *authToken*: token authenticating user in system
  - Response:
    - *projects*: list of projects with which user is associated

- **PostTask**
  - Route: /task
  - Method: POST
  - Parameters:
    - *name*: name of task
    - *description*: description of task
    - *project*: id of project with which task is associated
    - *dueDate*: due date of task 
    - *assignedTo*: id of task assignee
    - *createdBy*: id of task creator
    - *authToken*: token authenticating user in system
  - Response: ----------------

- **GetTasks**
  - Route: /tasks
  - Method: GET
  - Parameters:
    - *authToken*: token authenticating user in system
  - Response:
    - *tasks*: list of tasks with which user is associated

\**Note*:
- The root URL for each route is https://sela-labs.herokuapp.com.
- All routes return a *success* field, indicating whether the call was successful, and a *message* field for unseccussful calls, explaining the failure mode