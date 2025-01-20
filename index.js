document.addEventListener("DOMContentLoaded", (_event) => {
  let loginForm = document.getElementById("loginForm");
  console.log(loginForm);
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let ID = document.getElementById("ID").value;
    let salasana = document.getElementById("salasana").value;
    let nimi = document.getElementById("nimi").value;
    let osoite = document.getElementById("osoite").value;
    let maa = document.getElementById("maa").value;
    let postinumero = document.getElementById("postinumero").value;
    let sähköposti = document.getElementById("sahkoposti").value;
    let sukupuoli = document.getElementById("sukupuoli").value;
    let suomi = document.getElementById("suomi").checked;
    let muukuinsuomi = document.getElementById("muukuinsuomi").checked;
    let lisatiedot = document.getElementById("lisatiedot").value;

    let idvirhe = document.getElementById("id-virhe");
    let salasanavirhe = document.getElementById("salasana-virhe");
    let nimivirhe = document.getElementById("nimi-virhe");
    let osoitevirhe = document.getElementById("osoite-virhe");
    let maavirhe = document.getElementById("maa-virhe");
    let postinumerovirhe = document.getElementById("postinumero-virhe");
    let sahkopostivirhe = document.getElementById("sahkoposti-virhe");
    let sukupuolivirhe = document.getElementById("sukupuoli-virhe");
    let kielivirhe = document.getElementById("kieli-virhe");

    idvirhe.innerHTML = "";
    salasanavirhe.innerHTML = "";
    nimivirhe.innerHTML = "";
    osoitevirhe.innerHTML = "";
    maavirhe.innerHTML = "";
    postinumerovirhe.innerHTML = "";
    sahkopostivirhe.innerHTML = "";
    sukupuolivirhe.innerHTML = "";
    kielivirhe.innerHTML = "";

    if (ID == "") {
      idvirhe.innerHTML = `(Lisää ID)`;
    } else if (ID.length < 6) {
      idvirhe.innerHTML = `(ID:n pitää olla vähintään kuusi merkkiä pitkä!)`;
    }
    if (salasana == "") {
      salasanavirhe.innerHTML = `(Lisää salasana)`;
    } else {
      let onkoIsoMerkki = false;
      let onkoNumero = false;
      let onkoErikoisMerkki = false;
      for (const merkki of salasana) {
        if (/!@£$€&%#/.test(merkki)) {
          onkoErikoisMerkki = true;
        }
        if (/[A-Z]/.test(merkki)) {
          onkoIsoMerkki = true;
        }
        if (/[0-9]/.test(merkki)) {
          onkoNumero = true;
        }
      }
      if (!onkoErikoisMerkki || !onkoNumero || !onkoIsoMerkki) {
        salasanavirhe.innerHTML = `(Salasanan pitää olla vähintään 6 merkkiä pitkä, sisältää vähintään yksi numero, yksi iso kirjain ja joku erikoismerkeistä.)`;
      }
    }

    if (nimi == "") {
      nimivirhe.innerHTML = `(Lisää nimi)`;
    }
    if (osoite == "") {
      osoitevirhe.innerHTML = `(Lisää osoite)`;
    }
    if (maa == "maa") {
      maavirhe.innerHTML = `(Lisää maa)`;
    }
    if (postinumero == "") {
      postinumerovirhe.innerHTML = `(Lisää postinumero)`;
    } else if (postinumero.length != 5) {
      postinumerovirhe.innerHTML = `(Postinumeron pitää olla 5 numeroa pitkä!)`;
    }
    if (sähköposti == "") {
      sahkopostivirhe.innerHTML = `(Lisää sähköposti)`;
    } else if (
      !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        sähköposti
      )
    ) {
      sahkopostivirhe.innerHTML = `(Sähköpostin kuuluu olla oikean muotoinen!)`;
    }
    if (sukupuoli == "") {
      sukupuolivirhe.innerHTML = `(Valitse sukupuoli)`;
    }
    if (!suomi && !muukuinsuomi) {
      kielivirhe.innerHTML = `(Valitse kieli)`;
    }
    console.log(
      `This form has a username of ${ID} and password of ${salasana}`
    );

    ID = "";
    salasana = "";
    nimi = "";
    osoite = "";
    maa = "";
    postinumero = "";
    sähköposti = "";
    sukupuoli = "";
    kieli = "";
    lisatiedot = "";
  });
});
