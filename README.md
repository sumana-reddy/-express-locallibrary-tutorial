# express-locallibrary-tutorial.
LocalLibrary to show patrons available books. 

The Model-View-Controller (MVC) is an architectural pattern that separates an application into three main logical components: the model, the view, and the controller. Each of these components are built to handle specific development aspects of an application. MVC is one of the most frequently used industry-standard web development framework to create scalable and extensible projects.

<img src="https://www.tutorialspoint.com/mvc_framework/images/model_view_controller.jpg">

Model

The Model component corresponds to all the data-related logic that the user works with. This can represent either the data that is being transferred between the View and Controller components or any other business logic-related data. For example, a Customer object will retrieve the customer information from the database, manipulate it and update it data back to the database or use it to render data.

View

The View component is used for all the UI logic of the application. For example, the Customer view will include all the UI components such as text boxes, dropdowns, etc. that the final user interacts with.

Controller

Controllers act as an interface between Model and View components to process all the business logic and incoming requests, manipulate data using the Model component and interact with the Views to render the final output. For example, the Customer controller will handle all the interactions and inputs from the Customer View and update the database using the Customer Model. The same controller will be used to view the Customer data.

<img src="https://www.freeprojectz.com/sites/default/files/xLibrary,P20Management,P20System.jpeg.pagespeed.ic.9X_Ivne2O8.jpg">

Reference:

<a href="https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm">Tutorials point</a>
