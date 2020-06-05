# Simple Sundanese Translator
## Penerjemah Basa Sunda Sederhana

### 13518139 | Mutiara Arifazzahra
###### Referensi: [Create React App](https://github.com/facebook/create-react-app)


Program ini merupakan aplikasi penerjemah bahasa antara bahasa Indonesia dan bahasa Sunda.
Pada aplikasi ini, penerjemahan dilakukan dengan mengimplementasi teori pencocokan pola,
tepatnya dengan Algoritma Boyer-Moore.
Aplikasi ini dapat mendeteksi kata pada kamus kata yang tersedia
dan mentranslasikannya sesuai kamus data tersebut.
Program ini dibuat memanfaatkan gabungan Flask + React.

Untuk menjalankan program ini, dibutuhkan:
- **Python** (dibutuhkan versi 2.7, 3.5, atau yang lebih baru)
  * Cek Versi:  
    Tulis di terminal: 
    ```
    python --version
    ```
  * Cara Install:  
    Download [di sini](https://www.python.org/downloads/)
    
- **Node.js** (dan npm)
  * Cek Versi:   
    Tulis di terminal: 
    ```
    node -v
    npm - v
    ```
  * Cara Install:  
    Download [di sini](https://nodejs.org/en/download/)
- **Yarn**
  * Cek Versi:  
    Tulis di terminal: 
    ```
    yarn --version
    ```
  * Cara Install:  
    Download [di sini](https://classic.yarnpkg.com/en/docs/install/)  
    atau tulis di terminal:
    npm install -save yarn
- **React-Scripts**
  Cara Install:  
  Tulis di terminal:
  ```
  npm install --save react-scripts
  ```
- **Create-React-App**
  Cara Install:  
  Tulis di terminal:
  ```
  npm install --save create-react-app
  ```
- **Flask** (dan flask_cors)
  Cara Install:  
  Tulis di terminal:
  ```
  pip install flask
  pip install flask flask_cors
  ```
        
**Cara menjalankan program:**
1. Buka cmd pada direktori:
   src/
2. Tulis:
   ```
   yarn start
   ```
   atau
   ```
   npm start
   ```
3. Buka cmd baru pada direktori:
   ```
   src/api
   ```
4. Tulis:
   ```
   set FLASK_APP=api.py
   flask run
   ```
5. Website penerjemah akan terbuka di browser.
6. Tuliskan kalimat yang ingin diterjemahkan pada bagian "Tulis kalimat di sini!"
7. Pilih ketentuan translasi pada bagian "Jenis Translasi"
8. Tekan tombol "Translasi!"
9. Hasil translasi akan tertulis di layar
10. Jika ingin menerjemahkan kalimat lain, ulangi langkah ke-6-8
