import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initilizeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initilizeAuthentication;


/*
steps for authentication
-----------
Step-1: Initial Setup
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. Enable auth method

--------------------------

Step-2: setup component

1. Create Login Component
2. Create Register Comonents
3. Create Route for login and Register

Step-3: set auth system
1. set up sign in method
2. setup sign out method
3. user state
4. special observer
5. return necesury methods and state from useFirebase

<Step-4: create auth context and use auth context
1. create auth context
2. create context provider
3. use Auth Provider
4. creaye useAuth Hook
5. set context provider context value


Step 5: create private route
1. create private Route
2. set private Route

*/