// upload.js
import { storage, db } from "./firebase.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function uploadApp(file, name, desc) {
  if (!file || !file.name.endsWith(".apk")) {
    alert("Only APK file allowed");
    return;
  }

  const storageRef = ref(storage, "apps/" + file.name);
  await uploadBytes(storageRef, file);

  const url = await getDownloadURL(storageRef);

  await addDoc(collection(db, "apps"), {
    name: name,
    description: desc,
    downloadUrl: url
  });

  alert("App uploaded successfully ✅");
}