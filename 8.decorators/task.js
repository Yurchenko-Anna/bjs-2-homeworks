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
    if (wrapper.allCount === 0){
      func(...args);
      wrapper.count +=1;
    }
       
    if (timeoutId){
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => { 
      func(...args);              
      wrapper.count +=1;
    }, delay);
    wrapper.allCount += 1; 
  }
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}
