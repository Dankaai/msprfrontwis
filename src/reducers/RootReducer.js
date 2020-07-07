import { combineReducers } from 'redux';
import artistes from './ArtisteReducer';
import boutiques from './BoutiqueReducer';
import buvettes from './BuvetteReducer';
import concerts from './ConcertReducer';
import faqs from './FaqReducer';
import informations from './InformationReducer';
import parkings from './ParkingReducer';
import scenes from './SceneReducer';
import stands from './StandReducer';



const RootReducer = combineReducers({
    artistes,
    boutiques,
    buvettes,
    concerts,
    faqs,
    informations,
    parkings,
    scenes,
    stands


});

export default RootReducer;