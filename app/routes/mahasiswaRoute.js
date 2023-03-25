const router = require('express').Router();
const mahasiswaController = require('../controllers/mahasiswaController');

router.get('/', mahasiswaController.getAllMahasiswa);
router.get('/:nama', mahasiswaController.getMahasiswaByName);
router.post('/', mahasiswaController.createMahasiswa);
router.put('/:nrp', mahasiswaController.updateMahasiswa);
router.delete('/:nrp', mahasiswaController.deleteMahasiswa);

module.exports = router;