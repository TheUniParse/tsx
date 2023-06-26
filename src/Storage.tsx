export default function Storage() {
  return <div>storage</div>
}

/** localStorage & sessionStorage 
 localStorage 5mb+
    individual for each origin (protocol, domain, port)
    shared between all tabs
    survive reload & close/open tab
  sessionStrage
    individual for each tab
    shared between all iframes
    survive reload ⚠️ but not close/open tap


* methods:
    setItem(key, value) – store key/value pair.
    getItem(key) – get the value by key.
    removeItem(key) – remove the key with its value.
    clear() – delete everything.
    key(index) – get the key on a given position.
    length – the number of stored items.
    💡 use Object.keys(storage) to exlode internal members as setItems
  
  event window.onstorage = ({
    key, // the update key, null if clear() called
    oldValue, // null in initialization
    newValue, // null if removed
    url, // where update happened.
    storageArea // object: localStorage | sessionStorage
  }) => { ... }
   
 */

/**
 * demo:
 *  localStorage.setItem('test', 'value')
 *  localStorage.getItem('test) // 'value'
 *  ⚠️ bad practice object-like access, (no event 'storage')
 *  localStorage.test = 'value2'        //⚠️bad
 *  localstorage.test // // 'value2'    //⚠️bad
 *  ⚠️ it's not iterable, so we need to do hack
 *   for (let key of Object.keys(localStorage))
 *     console.log(key, localStorage.getItem(key))
 *   ⚠️ keys must be "stringsOnly"
 *
 */
