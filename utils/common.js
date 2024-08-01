export function setItemWithExpiration(key, value, minutes) {
    const expirationTime = new Date().getTime() + minutes * 60 * 1000;
    const item = {
      value: value,
      expiration: expirationTime,
    };
    sessionStorage.setItem(key, JSON.stringify(item));
  }
  
  export function getItemWithExpiration(key) {
    const itemStr = sessionStorage.getItem(key);
    
    // If item doesn't exist, return null
    if (!itemStr) {
      return null;
    }
    
    const item = JSON.parse(itemStr);
    const currentTime = new Date().getTime();
  
    // If current time is greater than expiration time, remove the item and return null
    if (currentTime > item.expiration) {
      sessionStorage.removeItem(key);
      return null;
    }  
    return item.value;
  }

  export function getItemWithOutExpiration(key) {
    const itemStr = sessionStorage.getItem(key);
    if (!itemStr) return null;

    const item = JSON.parse(itemStr);
    const now = new Date().getTime();

    if (now > item.expiration) {
      sessionStorage.removeItem(key);
      return null;
    }

    return item.value;
  }

  