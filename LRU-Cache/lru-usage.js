let lruCache = new LRU(3);
lruCache.write('a', 123);
lruCache.write('b', 456);
lruCache.write('c', 789);
lruCache.read('a'); 

lruCache.write('d', 0);