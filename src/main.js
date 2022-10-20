import "./css/index.css"
import IMask from "imask"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(type) {
  const colors = {
    default: ["black", "gray"],
    visa: ["#436D99", "#2D57F2"],
    mastercard: ["#DF6F29", "#C69347"],
    rocketseat: ["#0D6F5D", "#C3129C"],
    amex: ["#7CB0C0", "#5474EB"],
    cielo: ["#A99E46", "#D32E48"],
    hipercard: ["#822124", "#A1585B"],
    diners: ["#D32E48", "#2D57F2"],
    jcb: ["#D32E48", "#2D57F2"],
    discover: ["#D32E48", "#2D57F2"],
    maestro: ["#D32E48", "#2D57F2"],
    unionpay: ["#A1585B", "#0D6F5D"],
    paypal: ["#5474EB", "#0D6F5D"],
  }
  ccBgColor01.setAttribute("fill", colors[type][0])
  ccBgColor02.setAttribute("fill", colors[type][1])
  ccLogo.setAttribute("src", `cc-${type}.svg`)
}

// Para trocar a cor do cartão:
// setCardType("visa")
// para executar no DOM: COMENTAR A LINHA DE CIMA E DESCOMENTAR A DE BAIXO
// globalThis.setCardType = setCardType
// globalThis.setCardType("visa")
// globalThis.setCardType("mastercard")
// globalThis.setCardType("default")

// security code
const securityCode = document.querySelector("#security-code")
const securityCodePattern = {
  mask: "0000",
}
const securityCodeMasked = IMask(securityCode, securityCodePattern)

// expiration date
const expirationDate = document.querySelector("#expiration-date")
const expirationDatePattern = {
  mask: "MM{/}YY",
  blocks: {
    YY: {
      mask: IMask.MaskedRange,
      // from: new Data().getFullYear,
      from: String(new Date().getFullYear()).slice(2), // PARA PEGAR SÓ 2 DÍGITOS DO ANO
      to: String(new Date().getFullYear() + 10).slice(2), // PARA LIMITAR A 10 ANOS
    },
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
  },
}
const expirationDateMasked = IMask(expirationDate, expirationDatePattern)

// card number
const cardNumber = document.querySelector("#card-number")
const cardNumberPattern = {
  mask: [
    {
      mask: "0000 0000 0000 0000",
      regex:
        /^(4011(78|79)|43(1274|8935)|45(1416|7393|763(1|2))|50(4175|6699|67[0-7][0-9]|9000)|50(9[0-9][0-9][0-9])|627780|63(6297|6368)|650(03([^4])|04([0-9])|05(0|1)|05([7-9])|06([0-9])|07([0-9])|08([0-9])|4([0-3][0-9]|8[5-9]|9[0-9])|5([0-9][0-9]|3[0-8])|9([0-6][0-9]|7[0-8])|7([0-2][0-9])|541|700|720|727|901)|65165([2-9])|6516([6-7][0-9])|65500([0-9])|6550([0-5][0-9])|655021|65505([6-7])|6516([8-9][0-9])|65170([0-4]))/,
      cardtype: "cielo",//elo
    },
    {
      mask: "0000 0000 0000 0000",
      regex: /^4\d{0,15}/,
      cardtype: "visa",
    },
    {
      mask: "0000 0000 0000 0000",
      regex: /(^5[1-5]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,2})\d{0,12}/,
      cardtype: "mastercard",
    },
    {
      mask: "0000 0000 0000 0000",
      regex: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,
      cardtype: "maestro",
    },
    {
      mask: "0000 0000 0000 0000",
      regex: /^8\d{0,15}/,
      cardtype: "rocketseat",
    },
    {
      mask: "0000 000000 00000",
      regex: /^3[47]\d{0,13}/,
      cardtype: "amex", //american express
    },
    {
      mask: "0000 0000 0000 0000",
      regex: /^606282|^3841(?:[0|4|6]{0,1})0/,
      cardtype: "hipercard",
    },
    {
      mask: "0000 0000 0000 0000",
      // regex: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
      regex: /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
      cardtype: "discover",
    },
    {
      // mask: "0000 000000 0000",
      mask: "0000 000000 0000",
      regex: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
      cardtype: "diners",
    },
    {
      mask: "0000 0000 0000 0000",
      regex: /(^(352)[8-9](\d{11}$|\d{12}$))|(^(35)[3-8](\d{12}$|\d{13}$))/,
      cardtype: "jcb",
    },
    {
      mask: "0000 0000 0000 0000",
      cardtype: "default",
    },
  ],

  dispatch: function (appended, dynamicMasked) {
    const number = (dynamicMasked.value + appended).replace(/\D/g, "")
    const cardInfo = dynamicMasked.compiledMasks.find(({ regex }) =>
      number.match(regex)
    )

    return cardInfo
  },

  //   const number = (dynamicMasked.value + appended).replace(/\D/g, "")
  //   const foundMask = dynamicMasked.compiledMasks.find(function (item) {
  //     return number.match(item.regex)
  //   })
  //   // console.log(foundMask)
  //   return foundMask
  // },
}
const cardNumberMasked = IMask(cardNumber, cardNumberPattern)

// verificar se o botão foi clicado
const addButton = document.querySelector("#add-card")

addButton.addEventListener("click", () => {
  if (
    (cardNumberMasked.value === "") |
    (securityCodeMasked.value === "") |
    (expirationDateMasked.value === "") |
    (cardHolder.value === "")
  ) {
    alert("Favor preencher todos os dados do cartão.")
  } else {
    alert("Cartão adicionado com sucesso!")
    cardNumberMasked.value = ""
    securityCodeMasked.value = ""
    expirationDateMasked.value = ""
    cardHolder.value = ""
  }
})

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault()
})

// capturar a digitação do nome e colocar no cartão
const cardHolder = document.querySelector("#card-holder")
cardHolder.addEventListener("input", () => {
  const ccHolder = document.querySelector(".cc-holder .value")
  // alterar o conteúdo
  ccHolder.innerText =
    cardHolder.value.length === 0 ? "NOME DO TITULAR" : cardHolder.value // se a quantidade de caract for = 0, deixar "NOME DO TITULAR", SENÃO deixa o que estiver digitado
})

// capturar a digitação do código cvc
securityCodeMasked.on("accept", () => {
  updateSecurityCode(securityCodeMasked.value)
})
function updateSecurityCode(code) {
  const ccSecurity = document.querySelector(".cc-security .value")
  ccSecurity.innerText = code.length === 0 ? "1234" : code
}

// capturar a digitação do número do cartão
cardNumberMasked.on("accept", () => {
  const cardType = cardNumberMasked.masked.currentMask.cardtype // para pegar qual a bandeira do cartão e passar para dentro da função abaixo
  setCardType(cardType)
  updateCardNumber(cardNumberMasked.value)
})
function updateCardNumber(number) {
  const ccNumber = document.querySelector(".cc-number")
  ccNumber.innerText = number.length === 0 ? "0000 0000 0000 0000" : number
}

// capturar a digitação da data
expirationDateMasked.on("accept", () => {
  updateExpirationDate(expirationDateMasked.value)
})
function updateExpirationDate(date) {
  const ccExpiration = document.querySelector(".cc-extra .value")
  ccExpiration.innerText = date.length === 0 ? "MM/YY" : date
}
