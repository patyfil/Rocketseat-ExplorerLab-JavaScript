// VISA 
// /^4\d{0,15}
// inicia com 4 seguido de mais 15 dígitos
4234234423432344

// MASTER 
// /(^5[1-5]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,2})\d{0,12}
// inicia com 5, seguido de um dígito entre 1 a 5, seguido de mais 2 dígitos
// OU
// inicia com 22, seguido de um dígito entre 2 e 9, seguido de mais 1 dígito
// OU
// inicia com 2, seguido de um dígito entre 3 e 7, seguido de mais 2 dígitos
// seguido de mais 12 dígitos
5353535353535353
2323232323232323
2234344655455664

// ELO
// /^4011(78|79)|^43(1274|8935)|^45(1416|7393|763(1|2))|^50(4175|6699|67[0-6][0-9]|677[0-8]|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9])|^627780|^63(6297|6368|6369)|^65(0(0(3([1-3]|[5-9])|4([0-9])|5[0-1])|4(0[5-9]|[1-3][0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8]|4[1-9]|[5-8][0-9]|9[0-8])|7(0[0-9]|1[0-8]|2[0-7])|9(0[1-9]|[1-6][0-9]|7[0-8]))|16(5[2-9]|[6-7][0-9])|50(0[0-9]|1[0-9]|2[1-9]|[3-4][0-9]|5[0-8]))/,



const cardsDynamicMasks = [
  {
    mask: "0000 000000 00000",
    regex: /^3[47]\d{0,13}/,
    cardtype: "american express",
  },
  {
    mask: "0000 0000 0000 0000",
    regex: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,
    cardtype: "discover",
  },
  {
    mask: "0000 000000 0000",
    regex: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,
    cardtype: "diners",
  },
  {
    mask: "0000 0000 0000 0000",
    regex: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,
    cardtype: "mastercard",
  },
  {
    mask: "0000 000000 00000",
    regex: /^(?:2131|1800)\d{0,11}/,
    cardtype: "jcb15",
  },
  {
    mask: "0000 0000 0000 0000",
    regex: /^(?:35\d{0,2})\d{0,12}/,
    cardtype: "jcb",
  },
  {
    mask: "0000 0000 0000 0000",
    regex: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,
    cardtype: "maestro",
  },
  {
    mask: "0000 0000 0000 0000",
    regex: /^4\d{0,15}/,
    cardtype: "visa",
  },
  {
    mask: "0000 0000 0000 0000",
    regex: /^62\d{0,14}/,
    cardtype: "unionpay",
  },
]