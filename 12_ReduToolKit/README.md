About React-Redux-Toolkit : 
1. Redux is an open-source JavaScript library which was first introduced in 2015 by Dan Abramov and Andrew Clark in 2015.
2. Redux was inspired by Flux but it omitted the unnecessary complexity: it does not have Dispatcher concept, has a single Store and the Action objects is received and handled directly by Store in the Redux. Redux is used by ReactJS for building the user interface and to manage the application state. The official React binding for Redux is React Redux which is used to read data from a Redux Store, and dispatch Actions to the Store to update data. It also helps the apps to scale.
3. The workflow of React Redux can be simply understood as:
    a.subscribes to the Redux store
    b.check to see if the data needed by the component have changed
    c.re-render the component

Importance : 
1. Being the official UI bindings for React Application, it is always kept up-to-date with any API changes.
2. Many performance optimizations are implemented internally, to re-render components only when needed.

Redux Architecture : 
There are three main components of Redux architecture are : 1. Store ,
                                                            2. Action,
                                                            3. Reducer
1. Store : The entire state of an application lists at a place called Store. It acts as a brain and manages the status of the application. It also has a dispatch(action) function.

2.Action : An action is a pure object which is sent or dispatched from the view. It is created to store information about the user’s event such as info about the type of action, the time of occurrence, the location of occurrence, info about its coordinates, and info about the state it aims to change.

3.Reducer is a pure function which is used to return a new state from the initial state. It reads the payloads from the actions. The reducer then updates the store via the state accordingly



