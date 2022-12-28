function cachingDecoratorNew(func) {
  let cache = [];
  return function(...args) {
    const hash = md5(args);
    let objectInCache = cache.find((objectInCache) => objectInCache.hash === hash);
    if (objectInCache) {
      console.log('Из кэша: ' + objectInCache.value);
      return 'Из кэша: ' + objectInCache.value;
    }
    let value = func(...args);
    cache.push({ hash, value });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log('Вычисляем: ' + value);
    return 'Вычисляем: ' + value;
  }
}



function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
   function wrapper(...args){
    wrapper.allcount += 1;
    if (timeoutId){
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
        timeoutId = null;
        console.log(func(...args)); 
        wrapper.count +=1;
    }, delay);
  }
  wrapper.count = 0;
  wrapper.allcount = 0;
  return wrapper;
}
