
### Browsers and How They Work?

A web browser is a software application that enables a user to access and display web
pages or other online content through its graphical user interface. Refer to the image
below to understand the key components involved in building a web browser.


#### User Interface:
This component allows end-users to interact with all visual elements available on the web
page. The visual elements include the address bar, home button, next button, and all other
elements that fetch and display the web page requested by the end-user.

#### Browser Engine:
It is a core component of every web browser. The browser engine functions as an
intermediary or a bridge between the user interface and the rendering engine. It queries
and handles the rendering engine as per the inputs received from the user interface.

#### Rendering Engine:
As the name suggests, this component is responsible for rendering a specific web page
requested by the user on their screen. It interprets HTML and XML documents along with
images that are styled or formatted using CSS, and a final layout is generated, which is
displayed on the user interface.

#### Networking:
This component is responsible for managing network calls using standard protocols like
HTTP or FTP. It also looks after security issues associated with internet communication.

#### Javascript Interpreter:
As the name suggests, it is responsible for parsing and executing the JavaScript code
embedded in a website. Once the interpreted results are generated, they are forwarded to
the rendering engine for displaying on the user interface.

#### UI Backend:
This component uses the user interface methods of the underlying operating system. It is
mainly used for drawing basic widgets (windows and combo boxes).

#### Data Storage/Persistence:
It is a persistent layer. A web browser needs to store various types of data locally,
for example, cookies. As a result, browsers must be compatible with data storage
mechanisms such as WebSQL, IndexedDB, FileSystem, etc.