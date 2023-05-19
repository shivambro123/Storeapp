import { legacy_createStore as createStore ,applyMiddleware , compose} from "redux";
import rootReducer from "./redux/rootReducer";
import thunk from 'redux-thunk'

    
const componseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    componseEnhancer(applyMiddleware(thunk))
    

)
export default store;
