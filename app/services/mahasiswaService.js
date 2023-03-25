const mahasiswaRepository = require('../repositories/mahasiswaRepository');

const getAllMahasiswa = async () => {
    try {
        const mahasiswas = await mahasiswaRepository.getAllMahasiswa();
        return mahasiswas;
    }
    catch(err) {
        return err;
    }
}

const getMahasiswaByName = async (nama) => {
    try {
        const mahasiswa = await mahasiswaRepository.getMahasiswaByName(nama);
        return mahasiswa;
    }
    catch(err) {
        return err;
    }
}

const createMahasiswa = async (data) => {
    try{
        const mahasiswa = await mahasiswaRepository.createMahasiswa(data);
        return mahasiswa;
    }
    catch(err) {
        return err
    }
}

const updateMahasiswa = async (data, nrp) => {
    try{
        const mahasiswa = await mahasiswaRepository.updateMahasiswa(data, nrp);
        return mahasiswa;
    }
    catch(err) {
        return err
    }
}

const deleteMahasiswa = async (nrp) => {
    try{
        const mahasiswa = await mahasiswaRepository.deleteMahasiswa(nrp);
        return mahasiswa;
    }
    catch(err){
        return err
    }
}

module.exports = {
    getAllMahasiswa,
    getMahasiswaByName,
    createMahasiswa,
    updateMahasiswa,
    deleteMahasiswa
}