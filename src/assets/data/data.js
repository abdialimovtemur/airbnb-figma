import img1 from './img1.svg'
import img2 from './img2.svg'
import img3 from './img3.svg'
import img4 from './img4.svg'
import img5 from './img5.svg'
import img6 from './img6.svg'
import img7 from './img7.svg'
import img8 from './img8.svg'
import img9 from './img9.svg'
import img10 from './img10.svg'
import img11 from './img11.svg'
import img12 from './img12.svg'

 const data = {
  header: {
    navbar: [
      {
        id: 1,
        img: "https://s3-alpha-sig.figma.com/img/f8c1/d719/7b8d3b7e1ba0a1d94bc3bc6ebbc5245e?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rx4p4wNSsEj7SNpIqRvNr4HWbjjvtqlFe-Pk7aeg6p39Gi7aU0Dux6Kq80VFUXJqdS8zP-0bHKzj7nZHNMVEJYZ6hZn7nQpiT~81mPQ9f30Ol1tY-NC2Dv6Riy~o6X1kpzXa-aiJejJbzc2hSWve-gzJXhwrmrcH3NwprfBlycWN9i97-PHzbaH1xX0lMlgBgB8RzmRVVCiu9LoIdaF1~cnHYpgtDkHEiB96y2osrQwH~6PJoXxG8vBN3rdZvc78Tm4Ar5OzqCyN3t3LMUxIvr-F~LIXuxt1AsyJ44DkdO1ajBAymtYxKLe9aaHVz7EzNcjWOo-tZBR4LxDzmEYT5Q__",
        title: "Amazing views",
      },
      {
        id: 2,
        img: "https://s3-alpha-sig.figma.com/img/4842/d717/49f590daf0e7da62890b29d6bff371fe?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cj8Bi5EDY3ZZvWR3dVsfrSdUl6cQpqG5uLonf~-EWFrdufVX6w2WJimJFVcUqiPAwzliO~8ENUbmiSt8~8nJnBbOasNlgLmGCcEDopqke0xdYx2C-Wr5BHGMvVny4uZCOSwU6AH~ZDT9fnlA2ji~rXq0vjV9fgo4a2yEKW9464h752SVHAqT55~rXhVJA-pq5NJOSI~y1m9yIz-J-nqIyyN20gGGYcU81VxF-hYYg9PcpQ9E-PGkNr~0y~edBKYwVrw2ZyLwdWb8A7DzffnVlxmVnkJF95m0LmRQxeJv-vw4oBOaM-MJ7Yw7Q2nsUkVb48bCi7FaJivgiLBhslFnyg__",
        title: "Lakefront",
      },
      {
        id: 3,
        img: "https://s3-alpha-sig.figma.com/img/5896/48e1/0c6d3177e5bb367fb041be0a2252c541?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NbXVgSF0EWXu4UBugfhEoC3sGtE7QYFtFKYOtKPtJfTxHDpc32ymimPY4~VJboTWs6cx5xSDaB99IJlW4Xcfp36wCKvcapGKWnUKqy43zNvbq5UmAkoMGaRBPuJn88hU8rxTgRmoDd3vmqG1rvu6PvyuoAiUaNVYlwl0l-IHVnUWAp2GXnlmvpne9a-XFv1~07Jqtju-6gw~sn193~VGf8V1PNR3AUqNp3P4eLUsUNp2jc1tIa0jBIoUAgnLhu0L6lObG9xlg1ehn5aJUdVGq1cTQbjHwEkyzDPi2aKVDCRA5iMBgJ3kciE0QVxuyZ40ibhD~PxZFQgJS-zgbDGrLw__",
        title: "Caves",
      },
      {
        id: 4,
        img: "https://s3-alpha-sig.figma.com/img/92c2/f6ae/6028bc0edd2598f4929d345911da2016?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pw6Aa08enOraWRYg46AbF7-yUDuo40fZeTpPpvvbXXRQCHwqb5RKMc4mZK8Y55snhFUNEXObq3qoS7hT7grsBqkdmDgRsW2PyKEYih6lolmaUE270PgjEacR-H0~z5DQO11qdkuDZ0QEpUcKyZybZ60bghfXiAiCH-ETakC4tiPQNyBrzPmNaAGVOi2tlksWJYQLqSKR9jxdVGAg-6Is-xaKzj3Q-culTtJajsKqfxYVWR6avv144gxKnLDFFxj2XwfWRb6GmNXkIzHodtYtMi9Yot37M4rSOEt~IRRK89JlShcUjwtlNE4Rxwk7FV-XwAc6G7R8sJpnBtmjRb0OoA__",
        title: "OMG!",
      },
      {
        id: 5,
        img: "https://s3-alpha-sig.figma.com/img/0371/b10a/7cd2a07b113aabe0ef08464b12964914?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pbWnAcB9otwt~crie6yxbV92kX03rEncYcvfT~CAhxB9Lw12wV3WHT3hv2A98fHRK8-TtGfPHSH8wWZilHQZc9Z-xUBseBTDP1p8mxO1QcNrdMlaPFJoBDzkN9S6J6euKo0P3AsQP~Lfx1fxc5FlwcCT1K8cffcFfzw49aVzGD7w-OSohyvhQQpVZFrdVGeBAlSoE1iPxVA~8hUKnRhNeHwAAThoSL7qIB~OGn~qy~UW3zpJnEl0kDlDVGTjjuZMS2V1Q0bE77it01lbG3OzQJg0xWOtTB7en~uvAdbVZGGIyYQYwI000YczvCfHytkI6sGwucf1rjollvhmxLCYLw__",
        title: "Earth homes",
      },
      {
        id: 6,
        img: "https://s3-alpha-sig.figma.com/img/2ade/050b/c367ea02651aa9863a7363a8e8ad6ffe?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fZ5Xq916ga2dVYpGtwt97hd4F8SKvTMYHz7PviPx20qScc-xXP5Jqf~rAYd6Oe8Y7xm8FtEkpU3ov5DHy6~mh3GaPhEdiCybubDxS01695H~vHbAknNiR9JSbZB0Tq0B7EmVM0gVIFbfma0kj5otFcicu~SQqydo3PdAhFijEOeWVsGzwo-sYg0baTvB4XNLFBMJA5gFbJIAnRNkzbkStGw5E77qXKfvHbQsuhwu06n7YirFDlIKF~3510wCtQTk4l7o7B1Z8nAspEo~cj4BV5AB~2YzOgSjuG~GHGkHO-wJBm0F9KCc3Plw-1YtN3aZOAeqgqSI7g69zvxE-PG26w__",
        title: "Treehouses",
      },
      {
        id: 7,
        img: "https://s3-alpha-sig.figma.com/img/6dd6/48cd/10b2196d304cd31a5f1ee7697a0809f9?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gbdF3llr6jgDz4mmrOcITbuk5cUQQoq5Um9r6qwOzeOFZwWNlr5t0swohCNdyb7UbcZ7pkmeuDOPIVI6FsM4o9rExQUXbdufTweGfBfVuCteRrtYtL0cFKbwv3X-147nG5OzO0Nx~RRuK7pN30cJtTY2L3mHdu4d-jai2Nr-gAI4QQLshIa7QDyHX8rhh-QbuvVf-1mA46ufx3eBFXd5DCmMwzjB3Iyv3EQPxeD8pwcRWccouMe4MkNVsCcIs8xGlckbGP5bzO2dotAxLoW7uQGxH3kRRtP9kLzAjsJ55jTwTPu7LTZlJ-97Te8fRDa7pOFiUHrJ-Aze7toWuMnnXA__",
        title: "Mansions",
      },
      {
        id: 8,
        img: "https://s3-alpha-sig.figma.com/img/5f6f/232a/f48f47204634ae90fcf6a25546f8fe8f?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZwO8nxAPLlIkKPeurjcUBvbKsexwzf6nGoCyvS96tNPndKU9L683XR9mVSh2Z4V~szKvFfNSh5MrfVXmMELQP1z8BlJ-79rv8KKW5UsW5emvT1OKFzQQ2qf8fgf0AOZwDFfE-UK-yy2ieqsnZN9eE34ZA8bk~cxF9mCJAhge-velYzZ-KbwXFjO9Nrn~O4g~EEPeSCfeN~FwCFI0Nqsr4300ya4~mhMmorEQZGBp6kJtPn3Y~R7jvimf~aAdBaAowUX1~NdHJYixtc2XF7ybZaFPgmAdBhkQxHneLM-MVnUBCLi1KEt~98UYNcxgTnYqpa678V2BcQVqropkJwfBCQ__",
        title: "Cabins",
      },
      {
        id: 9,
        img: "https://s3-alpha-sig.figma.com/img/bdfd/0b2c/355d9ffac3c209aff67166a05391ce33?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MHQU4MxUKXjVGUmjQUGYb041iG-HeGTTZzIMkIpKSCy2WwTwKRztUnSxI3a4zLVv0QHSJGRasZy4Daqw8daiR7xTVyw0up2ZvAWwdFBs1Bwi2cXNIxfYWeDC3XzedQ53u2ft~VEsv2H2woDbSNRLfZCNIeI5zuhlS35T3lvSgUIyjlPoKB2qHz33AfZYNYzJI6vEMADLgIoufzoetCSPmM9JqCUuIcKsYkDbWugI3j1eOeXWoElEIb0b9cMaBVLwERk34yZVukSYOhIHXZgiJOgqsEhFR2SPEKGX0h9i4TXAdFmfMgdsD2KiXV3JPDBsespgUTCeIVRiXoxFgsseWg__",
        title: "Amazing pools",
      },
      {
        id: 10,
        img: "https://s3-alpha-sig.figma.com/img/0779/c993/550ea73e2af3dd0164b6b54a36cc77bb?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GAPZK54jB2Ks9lwHKMP~EuooklyDNpZh0xj0HWoCsXdfTYHPCKbd8eydTSWajV4~PH7rvSMBlAQXAhy4t~p~mPk0~SCltjXRDI7Kt0-CB7S-1lqcAlAPccDwf4taDltAepCtJF5jjEThRP1SOTu0JCzosAGTQyfZc9bQ5nrmm5mYaCbtewqK9lBE5ZSbJVDb8B7-gGVGF7fxnKfo~o27lZgL1z7ISdtGHUDgSdO4-yCE~F8TYdhd7MhsLgUDEX8GCI~8Nh8IWVymgb5wszVyV5uLiC-ehlGZR4QzPRUloF4cQkwI5l2o1xSd5JMfVU-fRAWVUg7OQX91aW6F4Xcx~w__",
        title: "Islands",
      },
      {
        id: 11,
        img: "https://s3-alpha-sig.figma.com/img/8333/6760/ba05c3ca0d364264973f70896b035a0f?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nr4dB35D3NOw2gZuMsJRc4yt3CVPHJFO1JpnYP-ABMP-YUopEOsAsq48DYbhRffXbgFy2EOp~I8gQlbmwR0ydt1wXPdcaBgxBBu0cdA9FyTWsqyNuFY0IlJpAfsDx0sD3vxb2qxWi6WiFkVgA~6AmoGmkQdmDlJmdVjHWiKrKTFjSE7TpSTNzPRnANX9YEFAw9~AT-SFMgEsi-fmcNjmQG9Ju0ROHPDl3FTMwt9djhdFB~qDHilibnZXjZ6oFWlFxuzYTwxdCB5e1wD7Q9ZvvnswaaMGt954rgk3PqYyhbH2aQ6LGo9Ch9OsNMKG~~JqtPm~Nc9vhSh0llhHmlekdA__",
        title: "Beachfront",
      },
      {
        id: 12,
        img: "https://s3-alpha-sig.figma.com/img/19bd/0b44/7f5f250bf321e35cd9de8f90062d278a?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bc2ROL5TEzYkykcw0835Vvsjx2zTo6y4M5SAMsjx1ptUmnU5lK21NcK7VYLO7R32ujNg-ZdX8jO7oTqjl2fT~JsPmtMBeqb8hRaNITv5L1V88~dfnfXWGNhhMY9xAhk-bLglJlielRc2xYATML9E1DHq~1RqZnKbn09fHSfTZBoF4cpUi3wecgu8EoWZAeRbwO93pi5CxM59SctJWqNaNuIVVkB7TGaZlFTX6XKv1ZdslZH5qj1yIY0BCLfxRBCBi~t3AQl9z8hnxyj7cdiGv4g11eqe07UiCH683KyPhiFXNppX8TUkO~vWGmtTBrrd-VFim2Z1d5ghc9Rb26Xn1w__",
        title: "Trending",
      },
    ],
  },
  products: [
    {
      id: 1,
      img: img1,
      title: "Knoxville, Tennessee",
      desc: "Mountain and lake views",
      price: 388,
      date: "Apr 16 – 21",
      rate: 5.0,
    },
    {
      id: 2,
      img: img2,
      title: "Sevierville, Tennessee",
      desc: "Mountain views",
      price: 343,
      date: "Jun 5 – 10",
      rate: 4.93,
    },
    {
      id: 3,
      img: img3,
      title: "Branson, Missouri",
      desc: "Mountain views",
      price: 388,
      date: "Apr 30 – May 5",
      rate: 5.0,
    },
    {
      id: 4,
      img: img4,
      title: "Chicago, Illinois",
      desc: "City views",
      price: 326,
      date: "Apr 4 – 9",
      rate: 4.72,
    },
    {
      id: 5,
      img: img5,
      title: "Chicago, Illinois",
      desc: "Lake and city views",
      price: 349,
      date: "Mar 4 – 9",
      rate: 5.0,
    },
    {
      id: 6,
      img: img6,
      title: "Sevierville, Tennessee",
      desc: "Mountain and lake views",
      price: 255,
      date: "Mar 5 – 10",
      rate: 4.82,
    },
    {
      id: 7,
      img: img7,
      title: "Cassopolis, Michigan",
      desc: "Lake views",
      price: 595,
      date: "Mar 5 – 10",
      rate: 4.96,
    },
    {
      id: 8,
      img: img8,
      title: "Tofte, Minnesota",
      desc: "Beach and lake views",
      price: 170,
      date: "Mar 19 – 24",
      rate: 4.89,
    },
    {
      id: 9,
      img: img9,
      title: "Sevierville, Tennessee",
      desc: "Mountain and park views",
      price: 229,
      date: "Mar 18 – 23",
      rate: 4.94,
    },
    {
      id: 10,
      img: img10,
      title: "Osage Beach, Missouri",
      desc: "Lake and pool views",
      price: 850,
      date: "Mar 3 – 8",
      rate: 4.85,
    },
    {
      id: 11,
      img: img11,
      title: "Pigeon Forge, Tennessee",
      desc: "Mountain views",
      price: 439,
      date: "Mar 5 – 10",
      rate: 4.95,
    },
    {
      id: 12,
      img: img12,
      title: "Sevierville, Tennessee",
      desc: "Mountain and lake views",
      price: 585,
      date: "Apr 2 – 7",
      rate: 4.98,
    },
  ],
};

export default data

