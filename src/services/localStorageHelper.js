export const localStorageHelper = {
    load(key) {
      const stored = localStorage.getItem(key);
      if(stored){
        try {
          return JSON.parse(stored);
        } catch (error) {
          return undefined;
        }
      }
      return undefined;
    },
    store(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    },
    modify(key, fn) {
      this.store(key, fn(this.load(key)));
    },
    appendItemToArray: (item, storageID) => {
      this.modify(storageID, (storage = []) => [...storage, item]);
    },
    removeItemFromArray: (item, storageID) => {
      this.modify(storageID, (storage = []) => storage.filter((s) => s !== item));
    },
    saveItemToObject: (item, storageID) => {
      this.modify(storageID, (storage = {}) => ({ ...storage, item }));
    }
    //...
  };  