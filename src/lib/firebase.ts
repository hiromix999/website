import { initializeApp, getApps } from 'firebase/app';
import {
  getFirestore,
  doc,
  onSnapshot,
  updateDoc,
  setDoc,
  increment,
  getDoc,
  collection,
  addDoc,
  runTransaction
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Handle named database ID if present
export const db =
  firebaseConfig.firestoreDatabaseId && firebaseConfig.firestoreDatabaseId !== '(default)'
    ? getFirestore(app, firebaseConfig.firestoreDatabaseId)
    : getFirestore(app);

export {
  doc,
  onSnapshot,
  updateDoc,
  setDoc,
  increment,
  getDoc,
  collection,
  addDoc,
  runTransaction
};
