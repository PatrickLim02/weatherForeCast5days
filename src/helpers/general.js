export const findIcon = (icons) => {
    const icon = `https://openweathermap.org/img/w/${icons}.png`
    return icon;
}

export const celciusConverter = (kelvin) =>{
    const k = parseFloat(kelvin);
    const c = (k-273.15);
    return c.toFixed(0);
}