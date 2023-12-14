// object destructuring

const band = {
    bandName : "led zepplin",
    famousSong : "staieway to heaven",
    year : 1998,
    anoterFamousSong : "kashmir"
};

// const bandName = band.bandName;
// const famousSong = band.famousSong;

// console.log(bandName, famousSong );

const {bandName, famousSong , ...restprops} = band;
console.log(bandName,famousSong);
console.log(restprops); 