// soluzione con ajax
// for (var i = 0; i < 10; i++) {
//   $.ajax(
//   {
//     url: "https://flynn.boolean.careers/exercises/api/random/mail",
//     method: "GET",
//     success: function (data, stato) {
//       $("#listaEmail").append(`<li> ${data.response} </li>`);
//     },
//     error: function (richiesta, stato, errori) {
//       alert("E' avvenuto un errore. " + errore);
//     }
//   }
//   );
// }

// soluzione con axios
var app = new Vue({
  el: '#root',
  data:{
    emails:[]
  },

  mounted(){
    this.showName();
  },

  methods: {
    showName: function(){
      for (var i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {          
          this.emails.push(response.data.response);
        });
      }
    console.log(this.emails);
    },




  }

})
