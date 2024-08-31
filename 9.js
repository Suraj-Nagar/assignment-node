const EventEmitter= require('events');
const { emit } = require('process');
const emitter=new EventEmitter();
emitter.on("subscribe",()=>{
    console.log("Thanks for subcribing college wallah");
    
})
emitter.removeListener('subscribe');
emitter.emit("subscribe",);