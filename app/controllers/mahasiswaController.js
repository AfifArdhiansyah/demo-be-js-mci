const mahasiswaService = require('../services/mahasiswaService');

const getAllMahasiswa = async (req, res) => {
    mahasiswaService.getAllMahasiswa()
    .then(mahasiswas => {
        if(!mahasiswas) {
            res.status(404).send({
                status : 'error',
                message : 'Data mahasiswa tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data mahasiswa berhasil ditemukan',
                data : mahasiswas
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        });
    })
}

const getMahasiswaByName = async (req, res) => {
    const nama = req.params.nama;
    mahasiswaService.getMahasiswaByName(nama)
    .then(mahasiswa => {
        if(!mahasiswa) {
            res.status(404).send({
                status : 'error',
                message : 'Data mahasiswa tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data mahasiswa berhasil ditemukan',
                data : mahasiswa
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        });
    })
}

const createMahasiswa = async (req, res) => {
    console.log(req.body)
    const data = {
        nama : req.body.nama,
        nrp : req.body.nrp,
        jurusan : req.body.jurusan,
        umur : req.body.umur
    }
    mahasiswaService.createMahasiswa(data)
    .then(mahasiswa => {
        res.status(200).send({
            status : 'success',
            message : 'Data mahasiswa berhasil ditambahkan',
            data : mahasiswa
        });
    })
    .catch(err => {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        });
    })
}

const updateMahasiswa = (req, res) => {
    const nrp = req.params.nrp;
    if(nrp.length !== 10) {
        return res.status(400).send({
            status : 'error',
            message : 'NRP tidak valid',
            data : {}
        });
    }
    mahasiswaService.updateMahasiswa(req.body, nrp)
    .then(mahasiswa => {
        res.status(200).send({
            status : 'success',
            message : 'Data mahasiswa berhasil diupdate',
            data : mahasiswa
        });
    })
    .catch(err => {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        });
    })
}

const deleteMahasiswa = (req, res) => {
    const nrp = req.params.nrp;
    if(nrp.length !== 10) {
        return res.status(400).send({
            status : 'error',
            message : 'NRP tidak valid',
            data : {}
        });
    }
    mahasiswaService.deleteMahasiswa(nrp)
    .then(mahasiswa => {
        res.status(200).send({
            status : 'success',
            message : 'Data mahasiswa berhasil dihapus',
            data : mahasiswa
        });
    })
    .catch(err => {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        });
    })
}

module.exports = {
    getAllMahasiswa,
    getMahasiswaByName,
    createMahasiswa,
    updateMahasiswa,
    deleteMahasiswa
}