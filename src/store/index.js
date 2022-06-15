import { createStore } from "vuex";

const store = createStore({
    state(){
        return {
            siswas: [
              {
                id: 1,
                nis: "001",
                name: "Kafri",
                kelas: "A",
                alamat: "Jl. Ismaya 2",
                img: "https://source.unsplash.com/random/400x400/?student",
              },
              {
                id: 2,
                nis: "002",
                name: "Alam",
                kelas: "B",
                alamat: "Jl. Bambu",
                img: "https://source.unsplash.com/random/400x400/?montain",
              },
              {
                id: 3,
                nis: "003",
                name: "Andi",
                kelas: "A",
                alamat: "Jl. Mangga 2",
                img: "https://source.unsplash.com/random/400x400/?child",
              },
              {
                id: 4,
                nis: "004",
                name: "Asri",
                kelas: "C",
                alamat: "Jl. Pepaya",
                img: "https://source.unsplash.com/random/400x400/?girl",
              },
              {
                id: 5,
                nis: "005",
                name: "Bonar",
                kelas: "D",
                alamat: "Jl. Ismaya 2",
                img: "https://source.unsplash.com/random/400x400/?boy",
              },
            ],
        };
    },
    mutations: {
      addSiswa(state, data){
          const siswa = {
            id: Math.random().toString(16).slice(2),
            nis: data.nis,
            name: data.name,
            kelas: data.kelas,
            alamat: data.alamat,
            img: data.img,
          } 
          state.siswas.push(siswa);
      }
    },
    actions: {
      // Context mengarah ke mutations
      addSiswa(context, data){
        context.commit('addSiswa', data)
      }
    },
    getters: {
        siswas(state) {
            return state.siswas.sort((a,b) => (a.id > b.id ? -1 : 1) );
        },
        siswa: (state) => (id) => {
            return state.siswas.find(siswa => siswa.id == id)
        },

        // siswa(state){
        //   return (id) =>  {
        //     return state.siswas.find(siswa => siswa.id = id)
        //   }
        // }
    }
});

export default store;