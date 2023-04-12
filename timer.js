class Timer{
    constructor(durationInput , startButton , pauseButton,callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
         this.pauseButton = pauseButton;
         if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;

         }
         this.startButton.addEventListener('click', this.start);
         this.pauseButton.addEventListener('click', this.pause);
    }
    start = () => {
        if(this.onStart){
            console.log(this.durationInput.value);
            this.onStart(this.timeRemaining);
        }
        this.tick(); // set interval will cause user to see tick in one second so to avoid it we have added this.tick manually
        this.interval =  setInterval(this.tick , 20); // will return some integer (timer id)
        
    };
    pause = ()=>{
        clearInterval(this.interval);

    };
    tick = () => {
      if(this.timeRemaining >  0 )
       {this.timeRemaining = this.timeRemaining - 0.02;
        if(this.onTick){
            this.onTick(this.timeRemaining);
        }
    
    
    }
      else {
         this.pause();
        
        if(this.onComplete){
            this.onComplete();
        }
        
        }
    };
    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    }
    set timeRemaining(time){
        this.durationInput.value = time.toFixed(2);
    }
}