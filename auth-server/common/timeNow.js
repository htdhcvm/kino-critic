module.exports = () => {
    // 01.12.2021 19:20:24.123
    const dateObj = new Date();

    return `
        ${dateObj.getDate()}.${
        dateObj.getMonth() + 1
    }.${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}.${dateObj.getMilliseconds()}
        `.trim();
};
