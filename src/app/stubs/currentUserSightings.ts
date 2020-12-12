import {Sighting} from "../model/Sighting";
import {Organism} from "../model/Organism";

import { stubBottlenoseDolphin } from "./organisms";
import { stubOrcaDolphin } from "./organisms";

export const stubCurrentUserSightings = [

    new Sighting(
    '0',
    'Still here',
    'Houghton Bay',
    '11:15',
    6,
    stubBottlenoseDolphin,
    'Approx. 20',
    'Large pod playing',
    'Bay',
    undefined,
    'Playing',
    'Red Rocks',
    true,
    false
    ),

    new Sighting(
    '1',
    'Gone',
    'Shelly Bay',
    '16:52',
    28,
    stubOrcaDolphin,
    '7',
    'Family with 5 juveniles',
    'Bay',
    undefined,
    'Hunting',
    'Evans Bay',
    true,
    true
    )];
