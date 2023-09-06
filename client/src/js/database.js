import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const postDb = async (content) => {
  console.log('Post to the db');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.add({ jate: content});
  const result = await request;
  console.log('data posted to the db');
};


export const putDb = async (id, content) => {
  console.log('PUT to db');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({id: id, jate: content});
  const result = await request;
  console.log('data saved to jate db', result);
  if(result) {
    return result;
  } else {
    console.error('Couldnt put from db');
  }
  
  };

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET ALL from db');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  if (result) {
    return result;
  } else {
  console.error('getDb not implemented')
  }
};

initdb();
