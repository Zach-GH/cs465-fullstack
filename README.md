# cs465-fullstack
CS-465 Full Stack Development with MEAN

Architecture

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Why did the backend use a NoSQL MongoDB database?
Functionality

The backend used a NoSQL MongoDB database due to the difference in architecture that we had chosen in addition to the neccesity for a non-local dataset to be used. Non-localized datasets make the application more amenable when it comes to their deployment, as you are able to deploy a type of application that users are able to interact with on the internet. The other applicable types of development patterns show the difference of automation between the different types of web applictions available, and showed the iterable existence of automation that we are able to use dependent on the type of application, and the type of use-case we may need such as an admin site in addition to a user site. Personally, I think that SPA (single-page applications) are really useful, unlike other sites this uses one page opposed to many, which makes processing times for the website faster and reduces the CPU utilization needed for interacting with the site. I think that this main-stream type of automation will be incredibly popular, and continue to be so especially with the examples that Google, and Amazon are implementing with many different developer tools that they are offering in the present day.


How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
Testing

JSON, or Java Script Object Notation is an interesting implementation of what you could consider to be public key cryptography without the actual usage of cryptography. What I mean by this, is that these essentially are the representation of actual objects that are derived from JavaScript, opposed to Javascript which essentially are just the actual instances in which something maybe implemented. The primary utilization and neccesity here is that we are interacting with actual processess during run-time that we are able to interact with in addition to the segmentation and different use-cases that we maybe able to implement. One example of this is the usage of our trip-listing components in which we are able to interact with the different neccesary trips so we may interchangeably switch and change different malleable parts of the list that may not otherwise be possible, or rather much more difficult to implement in an online platform. This introduces the idea of reusable user interface components, as we do not have to generate new components every time such as if we were going to use an array list to create new objects every time a user interacts with an item while on a web browser. This is how we are able to get faster response times as if we were to do something similar without JSON, it may have a different outcome and respond differently as we are running one gigantic interchangable processes opposed to segmented ones that all independently communicate with one another.


Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
Reflection

What I find most interesting about the end points is the theoretical representation that these have to nodes in a network. These internalized pathways essentially allow us to use the JSON objects and have them communicate with one another similar to one another, almost as if you have the mirror-image of the internet in the actual web-browser application that is being implemented. In addition to this, the actual use-case of testing these API endpoints using a network listening tool such as Postman touches base with security testing as the two are incredibly similar. This introducess an ideology that connects with penetration testing, as the inputs and outputs of our website in addition to the manner in which these applications communicate with one another on a real level show the actuality of what is happening on a computer, or a database server in its operation.

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course challenged me in a way that I had not expected, as it was a taste of the actual implementation of a web browser application and an example of many different iterations of tools that we are able to use and implement. I feel like this class gave me a real example of what an application can act like and operate like and filled in a lot of the blanks that had not been prior explained in my degree.


Dev Notes
--
1. How to run: 
    - express --view=hbs --git -f
    - DEBUG=cs465-fullstack:* npm start

2. If you forget to check out to a new branch:
    - git stash (your changes)
    - git checkout -b *
    - git stash pop

3. to run mongodb, from desktop run this command:

    mongod --config /opt/homebrew/etc/mongod.conf
