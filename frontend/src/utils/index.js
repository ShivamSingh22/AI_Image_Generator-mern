import {surpriseMePrompts} from '../constants';

export function getRandomPrompt(prompt){
    const randomIndex= Math.floor(Math.random()*
    surpriseMePrompts.length);// gives a random index everytime
    const randomPrompt=surpriseMePrompts[randomIndex];//use of that random index to get a random prompt

    //don't get same random prompt continuosly
    if(randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}