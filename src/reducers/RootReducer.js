import artistes from './ArtisteReducer';
import boutiques from './BoutiqueReducer';
import buvettes from './BuvetteReducer';
import concerts from './ConcertReducer';
import faqs from './FaqReducer';
import informations from './InformationReducer';
import parkings from './ParkingReducer';
import scenes from './SceneReducer';
import stands from './StandReducer';
import {combineReducers} from 'redux';



const RootReducer = combineReducers({
    artistes: artistes,
    boutiques: boutiques,
    buvettes: buvettes,
    concerts: concerts,
    faqs: faqs,
    informations: informations,
    parkings: parkings,
    scenes: scenes,
    stands: stands,
});

export default RootReducer;