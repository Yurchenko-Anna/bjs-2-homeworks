class AlarmClock {
  constructor(){
    this.alarmCollection = [];
    this.intervalId;
  }

  addClock(time, callback){
    if (time === undefined || callback === undefined){
      throw new Error('Отсутствуют обязательные аргументы');
    } else if(this.alarmCollection.find(call => call.time === time)){
      console.warn('Уже присутствует звонок на это же время');
    }
    const newCall = {
      id,
      time = time,
      canCall = callback,
    }
    this.alarmCollection.push(...newCall);
  }

  removeClock(time){
    const deleteCall = this.alarmCollection.filter(call => call.time === time);
    this.alarmCollection.slice(deleteCall, 1);
  }

  getCurrentFormattedTime(){
    const time = Date.now();
  }

  start(){
    if (this.intervalId !== undefined){
      return;
    }
    setInterval(() => {
      this.alarmCollection.forEach((time) => if (time === Date.now()){
        canCall = false;
      }
    }, 1000);    
    this.intervalId = setInterval();
  }

  stop(){
   function clearInterval(){
      return intervalId = null;
    }
  }

  resetAllCalls(){
    this.alarmCollection.forEach(canCall = true);
  }

  clearAlarms(){
    stop();
    this.alarmCollection = [];    
  }
}