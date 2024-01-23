Exploring the DOM:

    Document - node that represents the entire document
    The nodes that represent HTML elements are Element nodes, and the nodes that represent text are Text nodes. 

    Useful Document Properties and Methods
        document.anchors: Returns all <a> elements that have a name attribute.
        document.baseURI: Returns the absolute base URI of the document.
        document.body: Returns the <body> element.
        document.cookie: Returns the document's cookie.
        document.doctype: Returns the document's doctype.
        document.documentElement: Returns the <html> element.
        document.documentMode: Returns the mode used by the browser.
        document.documentURI: Returns the URI of the document.
        document.domain: Returns the domain name of the document server.
        document.embeds: Returns all <embed> elements.
        document.scripts: Returns all <script> elements.
        document.strictErrorChecking: Returns if error checking is enforced.
        document.title: Returns the <title> element.
        document.URL: Returns the complete URL of the document.
        document.forms: Returns all <form> elements.
        document.head: Returns the <head> element.
        document.images: Returns all <img> elements.
        document.implementation: Returns the DOM implementation.
        document.inputEncoding: Returns the document's encoding (character set).
        document.lastModified: Returns the date and time that the document was updated.
        document.links: Returns all <area> and <a> elements that have an href attribute.
        document.referrer: Returns the URI of the referrer (the linking document).


Selecting DOM Elements:

    By ID: 
        getElementById - method of the document object is the most efficient way to select a DOM element if it has an id assigned to it.

    By Name: 
        getElementsByName - method for nodes with a name attribute, but since there can be multiple elements with the same name, getElementsByName will return a NodeList object that acts as an array of elements in the case of multiple matches. We will cover NodeList shortly.

    By CSS Selector: 
        querySelector - method allows us a way to use CSS selectors to select DOM elements. You can pass any valid CSS selector into this method, which selects the first matching element.

    HTMLCollections:

        Methods that return multiple elements, like getElementsByName, return a live HTMLCollection. 
        The HTMLCollection object acts like an array of DOM elements, but it is automatically updated as the DOM is updated. 
        This behavior can be useful or dangerous, depending on the desired implementation.

        Methods that behave in this way include:
            getElementsByName
            getElementsByTagName - Can select all elements of a given tag (e.g., all list items [li]).
            getElementsByClassName - Can select all elements with a given CSS class (e.g., all .container elements).


    querySelectorAll:

        querySelectorAll - selects all DOM elements that match the given selector. By allowing CSS selectors, and enabling a selection of multiple elements, querySelectorAll is incredibly flexible. 
        https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors
        CSS selectors can be combined in complex ways to select very specific elements, even if they do not have an associated unique ID.


    NodeList vs. HTMLCollection:

        Using querySelectorAll returns a NodeList object, rather than an HTMLCollection.
        The major difference between these two objects is that NodeLists generated via querySelectorAll do not update live like HTMLCollections.
        NodeLists also have a forEach method in addition to working with the for of syntax.
        While NodeList and HTMLCollection are similar to arrays in many ways, you cannot invoke Array methods directly on them. 
        In order to use Array class methods on either object, you must call them indirectly.


    Navigating Between Elements:

        In addition to selecting elements directly, you can also navigate between elements using their familial relationships. 
        The parents, children, and siblings of different nodes are all accessible through properties given by the Node interface.
        
        Some of these properties include:    
            parentNode - property of each node points at the node above it in the DOM tree.
            childNodes[<node-number>] - property of each node points at the nth child node directly below it in the DOM tree.
            firstChild - property of each node point at the first child of that node.
            lastChild - property of each node point at the last child of that node.
            nextSibling - property of each node point at the nodes immediately after them, that share the same parent.
            previousSibling - property of each node point at the nodes immediately before them, that share the same parent.


Manipulating the DOM:
    
    The document, Node, and Element objects all have methods that can be used to create, remove, or modify the DOM. 
    This is where HTML, CSS, and JavaScript meet, as the latter manipulates the former.    
    DOM manipulation enables dynamic and interactive web content.

    Creating Elements:
        Individual HTML elements can be created and added to the DOM via the document.createElement method. 
        This enables dynamic creation of elements based on data provided by a server or the user, rather than hard-coding data into HTML files.
    
    Adding Elements to the DOM:
        Once created, new elements need to be added to the DOM using a combination of selectors and Node instance methods. 
        We call appendChild on each table row, the table itself, and the app element.

    DOM Insertion Methods:
        There are three different methods used to insert elements into the DOM at specific locations:

            appendChild - 
                Adds a node to the end of a list of children of a specified parent node.
                Since a node cannot be in two places simultaneously, this will move the given node to the new location if it already exists elsewhere in the DOM. 
                Method returns the node that is being added, allowing it to be chained to create nested DOM structures.
            prepend - 
                Adds a node to the beginning of a list of children of a specified parent node. 
                Method of the Element object, not Node; and as such, only works on Elements. 
                You can prepend other elements, text, or both simultaneously.
            insertBefore - 
                Adds a node before another node in a list of children of a specified parent node.
                This method requires both the node to be added, and the node, which it is to be inserted before.

    Removing Elements from the DOM:

            removeChild -  
                Removes a child node from the node that it is called on. 
                It returns the removed node, which will remain in memory and can be used, but is no longer part of the DOM. 
                If the return value is not stored, the node will be deleted.

    Replacing Elements in the DOM:

            replaceChild - 
                Replace a node with a different one,, effectively removing the first node from the DOM. 
                If the new child node already exists elsewhere in the DOM, it will be moved to the new location (just like with appendChild and insertBefore).
                If the replaced element is not stored somewhere for later use, it will be deleted and its contents lost.
    
    Changing the Content of an Element:
        DOM elements have a couple of properties that can read and set their content:
        You will also see innerText used occasionally in place of textContent, but it is generally not recommended for performance reasons.
        https://kellegous.com/j/2013/02/27/innertext-vs-textcontent/

            innerHTML - Used to retrieve/set content as HTML.
            textContent - Used to retrieve/set content as plain text.
        
        innerHTML vs. textContent:
            innerHTML is an extremely powerful tool, which can allow for complete rewrites of DOM contents, 
            while textContent is an efficient text manipulation tool.
        
    Changing Element Styles:
        DOM elements also have a style property that can be used to read and set CSS styling. 
        In JavaScript, element styles are written in camelCase rather than the snake-case used by CSS, because the hyphen/subtraction symbol (-) is an operator in JavaScript.
        For example, the text-align CSS property is .style.textAlign in JavaScript.

    Changing Element Attributes:
        You may need to get, set, or check if an element has a certain attribute, like the name of an input or whether it is disabled. 
        There are three methods for working with an element's attribute: to read, write or update, or check for the existence of an attribute:

            getAttribute(name)
            setAttribute(name, newValue)
            hasAttribute(name)

    The classList Property:
        While attribute methods or the style property could work to modify element CSS classes, there is a better approach using the classList property. 
        
            Element.classList - read-only property that returns a collection of the class attributes of that element. 
        
        The returned collection object also has a number of methods that can be used to work with the element's classes:

            add(className, className, ...)
            remove(className, className, ...)
            toggle(className) - If the class exists on the element, it removes it. If it does not exist, it adds it.
            contains(className)
            replace(oldClass, newClass)
    

DOM Templating:
    JavaScript includes a variety of techniques, methods, interfaces, and objects that make it more convenient to generate repetitive or templated content.

    The following tools can be used to create DOM structures more efficiently:

        The DocumentFragment interface:
            Represents a document object with no parent. 
            A lightweight version of the Document interface, comprised of nodes and elements like a standard document. 
            Since the document fragment is not a part of the active document structure, changes made to it do not affect the document.
            Since changes to the fragment do not affect the live view of the document, using fragments to create dynamic content can result in better performance. 
            This makes document fragments useful tools for creating more complex DOM subtrees before inserting the entire tree into the live DOM.
            It can also be used in builder functions to return a DOM structure that does not necessarily know where it will be inserted.

        HTML <template> elements:
            As the DOM tree grows in complexity, creating structures purely with JavaScript can become confusing. 
            The HTML template element provides a way to create HTML that is not immediately rendered to the DOM. 
            These templates can then be cloned, manipulated, and appended to the document.
            The template elements have a JavaScript content property, which is a read-only DocumentFragment containing the DOM subtree, which the template represents.

        The cloneNode method:
            In order to make use of HTML template elements, we need to make use of the cloneNode method. 
            The cloneNode method returns a duplicate of the node on which it is called, taking an optional boolean parameter, which specifies whether a deep copy should be performed.


    


        








