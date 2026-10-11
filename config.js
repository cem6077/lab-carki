// =====================================================
//  FİZİK LAB ÇARKI · AYAR DOSYASI
// =====================================================
window.LAB_CONFIG = {
  groupName: "Fizik Lab Grubu",

  // Firebase ayarları (lab-carki projesi)
  firebase: {
    apiKey: "AIzaSyBILSFvNPy0EAaEKXOz3se31F9LSBfniA8",
    authDomain: "lab-carki.firebaseapp.com",
    projectId: "lab-carki",
    storageBucket: "lab-carki.firebasestorage.app",
    messagingSenderId: "577079016004",
    appId: "1:577079016004:web:74531a46e1abc30dc21a11"
  },

  // Firebase'de kullanıcıları açarken kullandığın e-posta uzantısı.
  // person2 → person2@labcarki.app
  emailDomain: "labcarki.app",

  // Admin kullanıcı adı. firestore.rules içindeki 'person1' ile AYNI olmalı.
  adminUser: "person1",

  // Çekilişi herkes için aynı yapan gizli kelime. Bir kez değiştir, sonra dokunma.
  salt: "fizik-lab-2026-gizli",

  // İlk çekiliş anı (Türkiye saati). Varsayılan: cumayı cumartesiye bağlayan gece 00:00.
  // Sonra her hafta aynı saatte yeni kişi seçilir.
  firstDraw: "2026-10-17T00:00:00+03:00",

  // Aynı kişi art arda iki hafta çıkmasın.
  noRepeat: true,

  // Kişiler ve varsayılan karakterleri (herkes sonra kendi değiştirir).
  users: [
    { username: "person1", name: "Person 1", emoji: "👑", anim: "float" },
    { username: "person2", name: "Person 2", emoji: "🦊", anim: "bounce" },
    { username: "person3", name: "Person 3", emoji: "🐸", anim: "wobble" },
    { username: "person4", name: "Person 4", emoji: "🐙", anim: "spin" },
    { username: "person5", name: "Person 5", emoji: "🦉", anim: "shake" }
  ]
};
