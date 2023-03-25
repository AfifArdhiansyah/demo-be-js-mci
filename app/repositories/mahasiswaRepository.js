const {mahasiswa} = require('../models')

const getAllMahasiswa = () => {
    return mahasiswa.findAll(
        {
            attributes: ['nama', 'nrp']
        }
    )
}

const getMahasiswaByName = (nama) => {
    return mahasiswa.findOne(
        {
            where: {
                nama: nama
            }
        }
    )
}

const createMahasiswa = (data) => {
    return mahasiswa.create(data)
}

const updateMahasiswa = (data, nrp) => {
    return mahasiswa.update(data, {
        where: {
            nrp: nrp
        }
    })
}

const deleteMahasiswa = (nrp) => {
    return mahasiswa.destroy({
        where: {
            nrp: nrp
        }
    })
}

module.exports = {
    getAllMahasiswa,
    getMahasiswaByName,
    createMahasiswa,
    updateMahasiswa,
    deleteMahasiswa
}