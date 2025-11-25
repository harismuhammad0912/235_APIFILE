const express = require('express');
const router = express.Router();
const multer = require('multer');
const komikController = require('../controllers/komikController');

// Konfigurasi Multer untuk menyimpan file di memory (Buffer)
const upload = multer({ storage: multer.memoryStorage() });

// --- Definisi Routes ---

// Create: Upload gambar + data komik
router.post('/komik', upload.single('gambar'), komikController.createKomik);

// Read: Ambil semua data komik
router.get('/komik', komikController.getAllKomik);

// Read: Ambil detail 1 komik berdasarkan ID
router.get('/komik/:id', komikController.getKomikById);

// Update: Edit data komik (bisa update gambar juga)
router.put('/komik/:id', upload.single('gambar'), komikController.updateKomik);

// Delete: Hapus komik
router.delete('/komik/:id', komikController.deleteKomik);

module.exports = router;